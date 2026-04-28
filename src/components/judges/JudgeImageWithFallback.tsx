"use client";

const DEFAULT_FALLBACK = "/judges/placeholder.jpeg";

type JudgeImageWithFallbackProps = {
  src: string;
  alt: string;
  className: string;
  fallbackSrc?: string;
};

export default function JudgeImageWithFallback({
  src,
  alt,
  className,
  fallbackSrc = DEFAULT_FALLBACK,
}: JudgeImageWithFallbackProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const img = e.currentTarget;
        const fallback = fallbackSrc || DEFAULT_FALLBACK;
        if (img.src.endsWith(fallback)) return;
        img.src = fallback;
      }}
    />
  );
}
