import Image from "next/image";
import React from "react";
import constant from "../../config/constant";
import _ from "lodash";

const BlogDetailIntro = ({ blogDetails }: any) => {
  return (
    <section className="md:py-12 px-4 md:px-16 flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-4 md:px-16 py-8 md:py-12">
        <div className="flex-1 h-64 p-5 md:h-auto">
          <p
            className="font-redHat text-lg font-medium"
            dangerouslySetInnerHTML={{
              __html: blogDetails?.introduction_para || "",
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
              __html: blogDetails?.introduction_sub_para || '',
            }}
          ></p>
        </div>

        <div
          className="flex flex-col gap-4 w-full md:w-1/3"
          style={{ border: `5px solid #A78B88` }}
        >
          <div>
            <img
              src={`${constant.REMOTE_IMAGE_ENDPOINT}${blogDetails?.intro_map_image?.filename_disk}`}
              className="w-full h-full"
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
                  src={`${constant.REMOTE_IMAGE_ENDPOINT}${blogDetails?.intro_polaroid_image?.filename_disk}`}
                  alt={"Poloroiad image"}
                  width={220}
                  height={250}
                  className="md:w-[270px] md:h-[306px]" // Adjust image size for mobile and larger screens
                />
                <div
                  className="w-full"
                  style={{
                    backgroundColor: "#FFFFFF",
                    marginTop: "-5px", // Ensure it visually "sticks" to the image container
                  }}
                >
                  <p
                    className="font-ragilac mt-1 text-center md:mt-2"
                    style={{ fontSize: 18 }}
                  >
                    {_.get(blogDetails, "intro_polaroid_caption", "")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Image
            aria-hidden
            style={{ marginTop: -50 }}
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
