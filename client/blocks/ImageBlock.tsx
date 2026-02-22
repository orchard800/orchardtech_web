function getImageUrl(image: any) {
  if (!image) return "";
  if (typeof image === "string") return image;
  if (image?.url) return image.url;
  if (image?.filename_disk && import.meta.env.VITE_DIRECTUS_URL) {
    return `${String(import.meta.env.VITE_DIRECTUS_URL).replace(/\/$/, "")}/assets/${image.id || image.filename_disk}`;
  }
  return "";
}

export default function ImageBlock({ image, alt, caption }: any) {
  const src = getImageUrl(image);
  if (!src) return null;

  return (
    <section className="py-10">
      <div className="container max-w-5xl">
        <img src={src} alt={alt || ""} className="w-full rounded-2xl border" />
        {caption && <p className="text-sm text-muted-foreground mt-3">{caption}</p>}
      </div>
    </section>
  );
}
