import { Button } from "@/components/ui/button";

export default function HeroBlock({ heading, subheading, primary_cta_label, primary_cta_href }: any) {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="container max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">{heading || "Orchard Tech"}</h1>
        {subheading && <p className="text-lg text-muted-foreground mb-10">{subheading}</p>}
        {primary_cta_label && (
          <Button asChild size="lg" className="rounded-full px-8">
            <a href={primary_cta_href || "#"}>{primary_cta_label}</a>
          </Button>
        )}
      </div>
    </section>
  );
}
