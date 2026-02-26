import { PixelOtLogo } from "@/components/PixelOtLogo";

const options = [
  { id: "v1", label: "V1 · Clean" },
  { id: "v2", label: "V2 · Character" },
  { id: "v3", label: "V3 · Compact" },
] as const;

export default function LogoLab() {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">OT Logo Lab</h1>
        <p className="text-muted-foreground mb-8">Three pixel-structure directions using your blue/green palette.</p>

        <div className="grid gap-4 md:grid-cols-3">
          {options.map((option) => (
            <article key={option.id} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent p-5">
              <PixelOtLogo variant={option.id} className="h-16 w-16 mb-4" />
              <h2 className="font-semibold">{option.label}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
