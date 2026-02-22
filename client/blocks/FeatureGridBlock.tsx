type Feature = { title: string; description?: string };

export default function FeatureGridBlock({ heading, intro, items = [] }: { heading?: string; intro?: string; items?: Feature[] }) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        {heading && <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{heading}</h2>}
        {intro && <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12">{intro}</p>}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(items || []).map((item, i) => (
            <article key={`${item.title}-${i}`} className="rounded-2xl border bg-background p-6">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              {item.description && <p className="text-muted-foreground text-sm">{item.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
