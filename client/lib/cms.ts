const DIRECTUS_URL = import.meta.env.VITE_DIRECTUS_URL?.replace(/\/$/, "") || "";
const DIRECTUS_TOKEN = import.meta.env.VITE_DIRECTUS_PUBLIC_TOKEN || "";

export type CmsSection = {
  id?: string | number;
  collection?: string;
  item?: any;
  sort?: number;
  type?: string;
  props?: Record<string, any>;
};

export type CmsPage = {
  id: string | number;
  slug: string;
  title?: string;
  status?: string;
  sections?: CmsSection[];
  seo?: Record<string, any>;
};

function headers() {
  const base: Record<string, string> = { "Content-Type": "application/json" };
  if (DIRECTUS_TOKEN) base.Authorization = `Bearer ${DIRECTUS_TOKEN}`;
  return base;
}

function endpoint(path: string) {
  if (!DIRECTUS_URL) throw new Error("Missing VITE_DIRECTUS_URL");
  return `${DIRECTUS_URL}${path}`;
}

function normalizeSections(raw: any[] = []): CmsSection[] {
  return raw
    .map((entry) => {
      const collection = entry?.collection || entry?.item?.collection || entry?.type;
      const item = entry?.item && typeof entry.item === "object" ? entry.item : entry;
      return {
        id: entry?.id,
        sort: entry?.sort ?? item?.sort ?? 0,
        collection,
        item,
        type: collection,
        props: item?.props || item,
      };
    })
    .sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0));
}

export async function getPageBySlug(slug: string): Promise<CmsPage | null> {
  const clean = slug.replace(/^\//, "") || "home";
  const params = new URLSearchParams({
    filter: JSON.stringify({ slug: { _eq: clean }, status: { _eq: "published" } }),
    limit: "1",
    fields: "id,slug,title,status,seo,sections.id,sections.sort,sections.collection,sections.item.*,*.*",
    deep: JSON.stringify({ sections: { _sort: "sort" } }),
  });

  const res = await fetch(endpoint(`/items/pages?${params.toString()}`), {
    headers: headers(),
  });

  if (!res.ok) return null;
  const json = await res.json();
  const page = json?.data?.[0];
  if (!page) return null;

  return {
    ...page,
    sections: normalizeSections(page.sections),
  };
}
