"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import _ from "lodash";
import constant from "../../config/constant";

const HomeBannerCarousel = ({ homeDetails }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = homeDetails?.hero_banner_assets || [];
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [totalSlides]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "600px" }}
    >
      {/* Slide Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          height: "560px"
        }}
      >
        {slides.map((banner_item: any, banner_index: number) => (
          <div
            key={`home_banner_${banner_index}`}
            className="w-full flex-none relative"
            // className="carousel-item w-full relative"
            style={{ flex: "0 0 100%" }}
          >
            <div
              className="absolute px-4 text-center text-white"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <p className="text-4xl md:text-6xl font-ragilac font-regular leading-tight">
                {banner_item?.hero_banner_assets_id?.hero_banner_title}
              </p>
              <p className="text-lg md:text-3xl mt-8 font-redHat font-regular">
                {banner_item?.hero_banner_assets_id?.hero_banner_subtitle}
              </p>
              <Link
                href={`${banner_item?.hero_banner_assets_id?.hero_banner_cta_url}`}
              >
                <button
                  className="mt-6 px-6 py-2 text-sm md:text-base text-white shadow-lg hover:bg-orange-500"
                  style={{ borderRadius: 6, backgroundColor: "#E5B791" }}
                >
                  {banner_item?.hero_banner_assets_id?.hero_banner_cta_text}
                </button>
              </Link>
            </div>
            <img
              src={`${constant.REMOTE_IMAGE_ENDPOINT}${banner_item?.hero_banner_assets_id?.hero_banner_image?.filename_disk}`}
              className="w-full object-cover h-full"
              alt={`Slide ${banner_index + 1}`}
            />
          </div>
        ))}
      </div>


      <div className="flex flex-row gap-2 justify-center items-center mt-4">
          {_.map(homeDetails?.hero_banner_assets, (dot_item, dot_iddex) => (
            <div
              key={`dot_item_${dot_iddex}`}
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: currentIndex === dot_iddex ? "#C95C5C" :'white',
              }}
            ></div>
          ))}
        </div>


    </div>
  );
};

export default HomeBannerCarousel;
