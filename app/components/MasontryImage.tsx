"use client";
import React from "react";

const images = [
  { src: "/dummy_full.svg", height: 150, text: "Paris" },
  { src: "/dummy_full.svg", height: 200, text: "London" },
  { src: "/dummy_full.svg", height: 180, text: "Paris" },
  { src: "/dummy_full.svg", height: 220, text: "London" },
];

const MasonryImage = () => {
  return (
    <div
      className="grid grid-cols-2 gap-4 lg:gap-6"
      style={{
        gridAutoRows: "80px", // Compact height
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden shadow-md"
          style={{
            gridRowEnd: `span ${Math.ceil(image.height / 80)}`, // Adjusted for smaller row height
          }}
        >
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Text Below Each Image */}
          <p className="mt-2 text-sm text-center text-gray-600">{image.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MasonryImage;
