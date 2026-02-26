import { GENERATED_PAGES } from "@/content/generated-pages";
import { getFallbackPage } from "@/lib/fallback-pages";

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

export type SiteNavItem = {
  label: string;
  to: string;
  sort?: number;
};

export type SiteSettings = {
  navigation: SiteNavItem[];
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

function itemFromTypedSection(entry: any) {
  const t = entry?.type;
  if (t === "hero") return entry?.hero || {};
  if (t === "rich_text") return entry?.rich_text || {};
  if (t === "cta") return entry?.cta || {};
  if (t === "feature_grid") return entry?.feature_grid || {};
  if (t === "image") return entry?.image_block || {};
  return {};
}

function normalizeSections(raw: any[] = []): CmsSection[] {
  return raw
    .map((entry) => {
      const type = entry?.type || entry?.collection;
      const typedItem = itemFromTypedSection(entry);
      const parsed = safeParseProps(entry?.props);
      const item = Object.keys(typedItem || {}).length ? typedItem : parsed;

      return {
        id: entry?.id,
        sort: entry?.sort ?? 0,
        collection: type,
        item,
        type,
        props: item,
      };
    })
    .sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0));
}

function normalizeNavItems(raw: unknown): SiteNavItem[] {
  if (!Array.isArray(raw)) return [];

  return raw
    .map((item, idx): SiteNavItem | null => {
      const label = String(item?.label ?? item?.title ?? "").trim();
      const toRaw = String(item?.to ?? item?.href ?? item?.url ?? "").trim();
      const to = toRaw.startsWith("/") || toRaw.startsWith("http") ? toRaw : `/${toRaw}`;
      const sort = Number.isFinite(item?.sort) ? Number(item.sort) : idx;

      if (!label || !toRaw) return null;
      return { label, to, sort };
    })
    .filter(Boolean)
    .sort((a, b) => (a?.sort ?? 0) - (b?.sort ?? 0)) as SiteNavItem[];
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!DIRECTUS_URL) return null;

  try {
    const params = new URLSearchParams({
      fields: "navigation",
      limit: "1",
    });

    const res = await fetch(endpoint(`/items/site_settings?${params.toString()}`), {
      headers: headers(),
    });

    if (!res.ok) return null;

    const json = await res.json();
    const item = json?.data?.[0] || json?.data;
    const navigation = normalizeNavItems(item?.navigation);

    if (!navigation.length) return null;

    return { navigation };
  } catch {
    return null;
  }
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

  if (!DIRECTUS_URL) return getFallbackPage(clean);

  const params = new URLSearchParams({
    filter: JSON.stringify({ slug: { _eq: clean }, status: { _eq: "published" } }),
    limit: "1",
    fields:
      "id,slug,title,status,seo,sections.id,sections.sort,sections.type,sections.hero.*,sections.rich_text.*,sections.cta.*,sections.feature_grid.*,sections.image_block.*,sections.props",
    deep: JSON.stringify({ sections: { _sort: "sort" } }),
  });

  try {
    const res = await fetch(endpoint(`/items/pages?${params.toString()}`), {
      headers: headers(),
    });

    if (!res.ok) return getFallbackPage(clean);
    const json = await res.json();
    const page = json?.data?.[0];
    if (!page) return getFallbackPage(clean);

    return {
      ...page,
      sections: normalizeSections(page.sections),
    };
  } catch {
    return getFallbackPage(clean);
  }
}
