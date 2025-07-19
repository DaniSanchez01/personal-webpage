import { useState, useEffect, useRef } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const startAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (images.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length]);

  // Handle scroll when activeIndex changes
  useEffect(() => {
    if (sliderRef.current) {
      const container = sliderRef.current;

      const containerRect = container.getBoundingClientRect();
      const containerStyle = getComputedStyle(container);

      const borderLeft = parseFloat(containerStyle.borderLeftWidth) || 0;
      const borderRight = parseFloat(containerStyle.borderRightWidth) || 0;
      const paddingLeft = parseFloat(containerStyle.paddingLeft) || 0;
      const paddingRight = parseFloat(containerStyle.paddingRight) || 0;

      const exactWidth =
        containerRect.width -
        borderLeft -
        borderRight -
        paddingLeft -
        paddingRight;
      const targetScroll = activeIndex * exactWidth;

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  const handleImageChange = (index: number) => {
    setActiveIndex(index);
    startAutoScroll();
  };

  const handlePrevClick = () => {
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    handleImageChange(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (activeIndex + 1) % images.length;
    handleImageChange(newIndex);
  };

  return (
    <div className="p-2">
      <div className="cst-slider-wrapper">
        <div className="cst-slider" ref={sliderRef}>
          {images.map((image, index) => (
            <img key={index} src={image.url} alt={image.description} />
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              className="cst-slider-arrow cst-slider-arrow-left"
              onClick={handlePrevClick}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="cst-slider-arrow cst-slider-arrow-right"
              onClick={handleNextClick}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        <div className="cst-slider-nav">
          {images.map((_, index) => (
            <a
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => handleImageChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
