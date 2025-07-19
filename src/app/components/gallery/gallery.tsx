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
  const intervalRef = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isScrollingProgrammatically = useRef(false);

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
    if (images.length > 0 && sliderRef.current) {
      isScrollingProgrammatically.current = true;

      const targetScroll = activeIndex * sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });

      setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 500);
    }
  }, [activeIndex, images]);

  // Handle manual scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollTimeout: number | null = null;

    const handleManualScroll = () => {
      if (isScrollingProgrammatically.current) return;

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Debounce scroll detection to avoid conflicts
      scrollTimeout = setTimeout(() => {
        const scrollLeft = slider.scrollLeft;
        const slideWidth = slider.offsetWidth;

        const rawIndex = scrollLeft / slideWidth;
        const currentIndex = Math.round(rawIndex);
        if (
          currentIndex !== activeIndex &&
          currentIndex >= 0 &&
          currentIndex < images.length &&
          Math.abs(rawIndex - currentIndex) < 0.3
        ) {
          setActiveIndex(currentIndex);
          startAutoScroll();
        }
      }, 100);
    };

    slider.addEventListener('scroll', handleManualScroll, { passive: true });

    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      slider.removeEventListener('scroll', handleManualScroll);
    };
  }, [activeIndex, images.length]);

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
          {images.map((image, index) => (
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
