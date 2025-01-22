import Image from "next/image";
import React from "react";
import constant from "../../config/constant";

const BlogDetailIntro = ({
  para,
  subpara,
  map_image,
  polaroid_image,
  polariad_caption,
}: any) => {
  return (
    <section className="md:py-12 md:pb-0 px-4 md:px-40 flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-4 md:px-16 py-8 md:py-12">
        {/* Left Content */}
        <div className="flex-1 h-auto p-5">
          <p
            className="font-redHat text-lg font-medium"
            dangerouslySetInnerHTML={{
              __html: para || "",
            }}
          ></p>

          <Image
            aria-hidden
            className="mb-3 mt-3"
            src="/line_separator.svg"
            alt="Line Separator"
            layout="responsive"
            width={100}
            height={50}
          />

          <p
            className="font-redHat text-base"
            dangerouslySetInnerHTML={{
              __html: subpara || "",
            }}
          ></p>
        </div>

        {/* Right Content */}
        <div
          className="flex flex-col gap-4 w-full md:w-1/3 md:sticky md:top-[150px] md:h-[600px] md:overflow-hidden" // Make the right div sticky
          style={{ border: `5px solid #A78B88` }}
        >
          <div>
            <img
              src={`${constant.REMOTE_IMAGE_ENDPOINT}${map_image}`}
              className="w-full h-full"
              alt="Map"
            />
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-[260px] h-[290px] rotate-6 md:w-[310px] md:h-[276px]">
              <div
                className="bg-white p-2 shadow-md mx-auto flex flex-col items-center"
                style={{
                  width: "240px",
                  height: "100%",
                  marginTop: 8,
                }}
              >
                <Image
                  src={`${constant.REMOTE_IMAGE_ENDPOINT}${polaroid_image}`}
                  alt={"Poloroiad image"}
                  width={220}
                  height={250}
                  className="md:w-[270px] md:h-[306px]"
                />
                <div
                  className="w-full"
                  style={{
                    backgroundColor: "#FFFFFF",
                    marginTop: "-5px",
                  }}
                >
                  <p
                    className="font-ragilac mt-1 text-center md:mt-2"
                    style={{ fontSize: 18 }}
                  >
                    {polariad_caption}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Image
            aria-hidden
            style={{ marginTop: -55 }}
            src="/mountains.svg"
            alt="Mountains"
            layout="responsive"
            width={100}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailIntro;
