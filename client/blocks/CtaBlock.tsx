import { Button } from "@/components/ui/button";

export default function CtaBlock({ heading, body, button_label, button_href }: any) {
  return (
    <section className="py-16">
      <div className="container">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h2>
          {body && <p className="text-primary-foreground/85 mb-8 max-w-2xl mx-auto">{body}</p>}
          {button_label && (
            <Button asChild variant="secondary" className="rounded-full px-7">
              <a href={button_href || "#"}>{button_label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
