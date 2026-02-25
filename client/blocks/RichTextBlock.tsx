const widths: Record<string, string> = {
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
};

export default function RichTextBlock({ content, max_width = "3xl" }: any) {
  const width = widths[max_width] || widths["3xl"];

  return (
    <section className="py-14 border-t border-border/70">
      <div
        className={`container ${width} prose prose-slate dark:prose-invert prose-headings:font-semibold prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground`}
        dangerouslySetInnerHTML={{ __html: content || "" }}
      />
    </section>
  );
}
