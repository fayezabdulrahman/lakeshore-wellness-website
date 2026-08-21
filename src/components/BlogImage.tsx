import {
  imageSrcSet,
  optimizedImageUrl,
  type BlogImage as BlogImageValue,
} from "../lib/blog";

export function BlogImage({
  image,
  className,
  eager = false,
  sizes,
}: {
  image: BlogImageValue;
  className?: string;
  eager?: boolean;
  sizes: string;
}) {
  return (
    <img
      className={className}
      src={optimizedImageUrl(image.url, 1200)}
      srcSet={imageSrcSet(image.url, [480, 768, 1024, 1440, 1920])}
      sizes={sizes}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      style={image.lqip ? { backgroundImage: `url(${image.lqip})` } : undefined}
    />
  );
}
