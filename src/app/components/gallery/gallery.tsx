import './gallery.css';

export interface Props {
  /** The CSS animation is written for exactly 4 images. */
  images: Array<ImageProps>;
}

export interface ImageProps {
  title: string;
  url: string;
  description: string;
}

const SLIDE_SECONDS = 5;

const Gallery = ({ images }: Props) => {
  const [firstImage] = images;

  return (
    <div>
      <div className="cst-slider" role="region" aria-label="Photo gallery">
        <div className="cst-slider-track">
          {images.map((image) => (
            <img key={image.url} src={image.url} alt={image.description} />
          ))}
          {firstImage && <img src={firstImage.url} alt="" aria-hidden="true" />}
        </div>
      </div>
      <div className="cst-slider-nav" aria-hidden="true">
        {images.map((image, index) => (
          <span
            key={image.url}
            style={{
              animationDelay: `${-(images.length - index) * SLIDE_SECONDS}s`,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
