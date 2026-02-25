import { Button } from "@/components/ui/button";

export default function CtaBlock({ heading, body, button_label, button_href }: any) {
  return (
    <section className="py-14 border-t border-border/70">
      <div className="container">
        <div className="rounded-md border bg-card p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">{heading}</h2>
          {body && <p className="text-muted-foreground mb-6 max-w-2xl">{body}</p>}
          {button_label && (
            <Button asChild className="rounded-md px-6">
              <a href={button_href || "#"}>{button_label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
