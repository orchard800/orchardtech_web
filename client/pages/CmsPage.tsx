import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPageBySlug, type CmsPage as CmsPageType } from "@/lib/cms";
import BlockRenderer from "@/components/cms/BlockRenderer";

export default function CmsPage({ forcedSlug }: { forcedSlug?: string }) {
  const params = useParams();
  const slug = forcedSlug || params.slug || "home";
  const [page, setPage] = useState<CmsPageType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    getPageBySlug(slug)
      .then((data) => mounted && setPage(data))
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [slug]);

  useEffect(() => {
    if (!page?.title) return;
    document.title = `${page.title} | Orchard Tech`;
  }, [page?.title]);

  if (loading) {
    return <div className="container py-24 text-muted-foreground">Loading content…</div>;
  }

  if (!page) {
    return <div className="container py-24"><h1 className="text-3xl font-bold">Page not found</h1></div>;
  }

  return <BlockRenderer sections={page.sections || []} />;
}
