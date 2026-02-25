import { Button } from "@/components/ui/button";

export default function HeroBlock({
  heading,
  subheading,
  primary_cta_label,
  primary_cta_href,
  secondary_cta_label,
  secondary_cta_href,
}: any) {
  return (
    <section className="pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="container max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight">{heading || "Orchard Tech"}</h1>
        {subheading && <p className="text-lg text-muted-foreground max-w-3xl mb-10">{subheading}</p>}
        <div className="flex flex-wrap items-center gap-3">
          {primary_cta_label && (
            <Button asChild size="lg" className="rounded-md px-6">
              <a href={primary_cta_href || "#"}>{primary_cta_label}</a>
            </Button>
          )}
          {secondary_cta_label && (
            <Button asChild size="lg" variant="outline" className="rounded-md px-6">
              <a href={secondary_cta_href || "#"}>{secondary_cta_label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
