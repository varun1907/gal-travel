import React from "react";
import Image from "next/image";
import constant from "../../config/constant";
// const images = [
//   { src: "/temp_travel.svg", alt: "Travel 1" },
//   { src: "/dummy_full.svg", alt: "Travel 2" },
//   { src: "/temp_travel.svg", alt: "Travel 3" },
// ];

const PortraitPhoto = ({ homeDetails }: any) => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 3000);

  //   return () => clearInterval(interval); // Cleanup interval on unmount
  // }, [images.length]);

  return (
    <div
      className="relative w-[310px] h-[346px] border-dashed border-[#A78B88] border-[0.75px] rotate-6 overflow-hidden"
    >
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={
          {
            // transform: `translateX(-${currentIndex * 310}px)`,
          }
        }
      >
        {/* {images.map((image, index) => (
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
              style={{ width: "290px", height: "326px", marginTop: 8 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={270}
                height={306}
                // className="rounded-md"
              />
            </div>
          </div>
        ))} */}

        <div
          className="flex-none"
          style={{
            width: "310px",
            height: "346px",
          }}
        >
          <div
            className="bg-white p-2 shadow-md mx-auto"
            style={{ width: "290px", height: "326px", marginTop: 8 }}
          >
            <div className="relative w-[270px] h-[306px]">
              <Image
                src={`${constant.REMOTE_IMAGE_ENDPOINT}${homeDetails?.what_to_expect_image?.filename_disk}`}
                alt={"what to expect"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortraitPhoto;
