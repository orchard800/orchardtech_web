import { GENERATED_PAGES } from "@/content/generated-pages";

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

function safeParseProps(value: any) {
  if (value == null) return {};
  if (typeof value === "object") return value;
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return {};
    }
  }
  return {};
}

function normalizeSections(raw: any[] = []): CmsSection[] {
  return raw
    .map((entry) => {
      const parsed = safeParseProps(entry?.props);
      const type = entry?.type || entry?.collection;
      const item = entry?.item && typeof entry.item === "object"
        ? { ...entry.item, ...parsed }
        : { type, ...parsed };

      return {
        id: entry?.id,
        sort: entry?.sort ?? 0,
        collection: entry?.collection || type,
        item,
        type,
        props: parsed,
      };
    })
    .sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0));
}

export async function getPageBySlug(slug: string): Promise<CmsPage | null> {
  const clean = slug.replace(/^\//, "") || "home";

  const generated = GENERATED_PAGES.find((p) => p.slug === clean);
  if (generated) {
    return {
      ...generated,
      sections: normalizeSections(generated.sections),
    };
  }

  // Dev/fallback mode only: query Directus at runtime when page wasn't baked at build time.
  if (!DIRECTUS_URL) return null;

  const params = new URLSearchParams({
    filter: JSON.stringify({ slug: { _eq: clean }, status: { _eq: "published" } }),
    limit: "1",
    fields: "id,slug,title,status,seo,sections.id,sections.sort,sections.type,sections.props",
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
