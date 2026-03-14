// Removed unused React default import (JSX runtime handles JSX)

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function ProjectImage({ src, alt, className = "" }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`${className} w-full h-full object-cover opacity-30 grayscale-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out`}
    />
  );
}
