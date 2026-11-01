import './cover.css';

interface CoverProps {
  image?: { src: string; alt: string };
  /** Its initial is shown when there is no image. */
  title: string;
  /** Sizing, aspect ratio and borders come from the caller. */
  className: string;
}

function Cover({ image, title, className }: CoverProps) {
  if (image) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        className={`cst-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`cst-cover cst-cover-default ${className}`}
      role="img"
      aria-label="Default cover"
    >
      {title.charAt(0).toUpperCase()}
    </div>
  );
}

export default Cover;
