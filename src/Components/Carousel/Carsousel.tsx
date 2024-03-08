import { useEffect, useState } from "react";
import { imageArray } from "../../utils/imageArray";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % imageArray.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + imageArray.length) % imageArray.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 3000);

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div className="carouselWrapper">
      <div className="mainCarouselWrapper">
        <button onClick={prevSlide} className="carouselLeftBtn">
          {<FontAwesomeIcon icon={faChevronLeft} />}
        </button>
        {imageArray.map((image, index) => (
          <img
            src={image.src}
            alt={image.alt}
            key={image.id}
            className={`carouselImgs ${
              currentIndex === index ? "selected" : ""
            }`}
          />
        ))}
        <button onClick={nextSlide} className="carouselRightBtn">
          {<FontAwesomeIcon icon={faChevronRight} />}
        </button>
      </div>
      <div className="miniCarouselWrapper">
        {imageArray.map((image, index) => (
          <img
            src={image.src}
            alt={image.alt}
            key={image.id}
            className={`carouselMiniImgs ${
              currentIndex === index ? "miniSelected" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
