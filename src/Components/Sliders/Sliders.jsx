import React, { useState, useEffect } from "react";

export const Sliders = ({ images = [] }) => {
  const slideCount = images.length || 3;
  const [current, setCurrent] = useState(0); // index starts from 0

  // autoplay every 3 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 3000);
    return () => clearInterval(id);
  }, [slideCount]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slideCount);
  };

  // use fallback images if none provided
  const slides =
    images.length > 0
      ? images
      : [
          "https://picsum.photos/1200/420?random=1",
          "https://picsum.photos/1200/420?random=2",
          "https://picsum.photos/1200/420?random=3",
        ];

  return (
    <div className="carousel w-full rounded-lg shadow-lg overflow-hidden relative">
      {slides.map((src, idx) => (
        <div
          key={idx}
          className={`carousel-item w-full transition-opacity duration-700 ${
            idx === current ? "opacity-100" : "opacity-0 absolute"
          }`}
        >
          <img src={src} className="w-full object-cover" alt={`slide ${idx + 1}`} />

          {/* Navigation buttons */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button onClick={handlePrev} className="btn btn-circle">
              ❮
            </button>
            <button onClick={handleNext} className="btn btn-circle">
              ❯
            </button>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute flex justify-center w-full bottom-4 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`btn btn-xs ${
              idx === current ? "btn-primary" : "btn-outline"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
