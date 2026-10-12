type Source = { readonly src: string; readonly w: number; readonly h: number };

export function ResponsiveImage({
  sources,
  sizes,
  alt,
  className,
  priority = false,
}: {
  sources: readonly Source[];
  sizes: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const last = sources[sources.length - 1];
  return (
    <img
      src={last.src}
      srcSet={sources.map((item) => `${item.src} ${item.w}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      width={last.w}
      height={last.h}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}
