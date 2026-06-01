"use client";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

const SafeImage = ({ src, alt, className = "", fallbackText = "Image Unavailable" }: SafeImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = `https://placehold.co/800x450/e2e8f0/64748b?text=${encodeURIComponent(fallbackText)}`;
      }}
    />
  );
};

export default SafeImage;
