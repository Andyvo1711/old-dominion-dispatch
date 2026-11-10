import Image from "next/image";

interface CoverImageProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/**
 * Shows the whole photo (object-contain) so faces/portraits are never cropped,
 * and fills any leftover space with a blurred, enlarged copy of the same image.
 * The parent must be `relative` with a fixed size/aspect ratio.
 */
export default function CoverImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: CoverImageProps) {
  return (
    <>
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes="80px"
        className="object-cover scale-125 blur-2xl opacity-80"
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-contain ${className}`}
      />
    </>
  );
}
