"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/temp_travel.svg", alt: "Travel 1" },
  { src: "/dummy_full.svg", alt: "Travel 2" },
  { src: "/temp_travel.svg", alt: "Travel 3" },
];

const PortraitPhoto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    // <div
    //   style={{
    //     width: 310,
    //     height: 346,
    //     border: "0.75px dashed #A78B88",
    //     padding: 10,
    //     transform: "rotate(10deg)",
    //   }}
    // >
    //   <div
    //     style={{
    //       width: 290,
    //       height: 326,
    //       backgroundColor: "#FFFFFF",
    //       padding: 10,
    //       boxShadow: `0px 5.84px 9.74px 0px #24242440`,
    //     }}
    //   >
    //     <Image
    //       aria-hidden
    //       src="/temp_travel.svg"
    //       alt="Footer line"
    //       width={270}
    //       height={306}
    //     />
    //   </div>
    // </div>
    <div
      className="relative w-[310px] h-[346px] border-dashed border-[#A78B88] border-[0.75px] p-2 rotate-6 overflow-hidden"
      style={{ zIndex: 100 }}
    >
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 310}px)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-none"
            style={{
              width: "310px",
              height: "346px",
              flex: "0 0 auto",
            }}
          >
            <div
              className="bg-white p-2 shadow-md mx-auto"
              style={{ width: "290px", height: "326px" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={270}
                height={306}
                className="rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortraitPhoto;
