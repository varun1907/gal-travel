"use client";
import React from "react";
import constant from "../../config/constant";

const MasonryImage = ({ homeDetails }: any) => {
  const images = [
    {
      src: homeDetails?.intro_image_1_image?.filename_disk,
      height: 150,
      text: homeDetails?.intro_image_1_caption,
    },
    {
      src: homeDetails?.intro_image_2_image?.filename_disk,
      height: 200,
      text: homeDetails?.intro_image_2_caption,
    },
    {
      src: homeDetails?.intro_image_3_image?.filename_disk,
      height: 180,
      text: homeDetails?.intro_image_3_caption,
    },
    {
      src: homeDetails?.intro_image_4_image?.filename_disk,
      height: 220,
      text: homeDetails?.intro_image_4_caption,
    },
  ];

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
          <div className="overflow-hidden w-full h-full">
            <img
              src={`${constant.REMOTE_IMAGE_ENDPOINT}${image.src}`}
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
