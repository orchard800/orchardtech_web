export default function RichTextBlock({ content, max_width = "3xl" }: any) {
  const width = `max-w-${max_width}`;
  return (
    <section className="py-12">
      <div className={`container prose prose-slate ${width} dark:prose-invert`} dangerouslySetInnerHTML={{ __html: content || "" }} />
    </section>
  );
}
