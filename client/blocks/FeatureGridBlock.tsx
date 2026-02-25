type Feature = { title: string; description?: string };

function normalizeItems(value: unknown): Feature[] {
  if (Array.isArray(value)) return value as Feature[];
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? (parsed as Feature[]) : [];
    } catch {
      return [];
    }
  }
  return [];
}

export default function FeatureGridBlock({ heading, intro, items = [] }: { heading?: string; intro?: string; items?: Feature[] | string }) {
  const list = normalizeItems(items);
  const wide = list.length >= 4;

  return (
    <section className="py-14 md:py-16 border-t border-border/70">
      <div className="container">
        {heading && <h2 className="text-2xl md:text-3xl font-semibold mb-3">{heading}</h2>}
        {intro && <p className="text-muted-foreground max-w-3xl mb-8">{intro}</p>}

        <div className={`grid gap-4 ${wide ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2"}`}>
          {list.map((item, i) => (
            <article key={`${item.title}-${i}`} className="rounded-md border bg-card p-5">
              <h3 className="font-medium text-base mb-2">{item.title}</h3>
              {item.description && <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
