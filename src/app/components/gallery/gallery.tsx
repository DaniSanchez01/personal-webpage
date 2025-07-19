import './gallery.css';

export interface Props {
  images: Array<ImageProps>;
}

export interface ImageProps {
  title: string;
  url: string;
  description: string;
}

const Gallery = ({ images }: Props) => {
  return (
    <div className="p-2">
      <div className="cst-slider-wrapper">
        <div className="cst-slider">
          {images.map((image) => (
            <img id={image.title} src={image.url} alt={image.description} />
          ))}
        </div>
        <div className="cst-slider-nav">
          {images.map((image) => (
            <a href={`#${image.title}`}></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
