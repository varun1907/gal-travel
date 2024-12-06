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
          className="relative shadow-md flex flex-col items-center"
          style={{
            gridRowEnd: `span ${Math.ceil(image.height / 80)}`, // Adjusted for smaller row height
          }}
        >
          <div className="rounded-lg overflow-hidden w-full h-full">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Below Each Image */}
          <div
            style={{ height: 40, backgroundColor: "#FFFFFF", width: "100%" }}
          >
            <p
              className="font-ragilac mt-2  text-center text-gray-600"
              style={{ color: "#C95C5C", fontSize: 18 }}
            >
              {image.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryImage;
