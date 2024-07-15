import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="Carousel-outer-box">
      <div className="carousel">
        <button className="carousel-button prev" onClick={handlePrevClick}>
          &#10094;
        </button>
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="carousel-caption">{slide.title}</div>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNextClick}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
