import { BLOCKS } from "@/components/cms/blockRegistry";
import type { CmsSection } from "@/lib/cms";

export default function BlockRenderer({ sections = [] }: { sections?: CmsSection[] }) {
  return (
    <>
      {sections.map((section, idx) => {
        const type = section.collection || section.type || section.item?.type;
        const Comp = type ? BLOCKS[type] : null;
        if (!Comp) return null;

        const props = section.item?.props && typeof section.item.props === "object"
          ? { ...section.item, ...section.item.props }
          : (section.item || section.props || {});

        return <Comp key={String(section.id ?? idx)} {...props} />;
      })}
    </>
  );
}
