"use client";
import Image from "next/image";
import React from "react";
import constant from "../../config/constant";

const Conclusion = ({
  heading,
  content,
  image,
  show_btn = false,
  btn_text = "",
  on_btn_click,
}: any) => {
  return (
    <div className="mx-5 md:mx-48 flex flex-col">
      <div
        className="flex flex-col md:flex-row pl-10 py-8 pr-8 gap-10"
        style={{ backgroundColor: "#EAD5C4" }}
      >
        <div className="flex-1" style={{ alignSelf: "center" }}>
          <Image
            aria-hidden
            className="mr-6"
            src="/conclusion.svg"
            alt="conclusion Icon"
            width={30}
            height={35.11}
          />
          <p className="font-redHat font-medium text-base mt-6">{heading}</p>
          <p
            className="font-redHat text-base mt-3 rich_text_links"
            dangerouslySetInnerHTML={{
              __html: content || "",
            }}
          ></p>
          {show_btn && (
            <button
              // onClick={on_btn_click}
              className="mt-6 px-6 py-2 text-sm md:text-base text-white shadow-lg hover:bg-orange-500"
              style={{ borderRadius: 6, backgroundColor: "#BD6D6D" }}
            >
              {btn_text}
            </button>
          )}
        </div>

        <div className="flex-1 flex justify-end ">
          <div
            className="relative bg-white w-[390px] md:w-[390px] h-[350px] md:h-[415px]"
            style={{
              boxShadow: `0px 4px 4px 0px #24242440`,
            }}
          >
            <Image
              aria-hidden
              src={`${constant.REMOTE_IMAGE_ENDPOINT}${image}`}
              alt="Conclusion image"
              style={{ padding: 5 }}
              className="w-[390px] h-[390px] md:w-[390px] md:h-[390px]"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <Image
        aria-hidden
        className="my-10 self-center"
        src="/line_separator.svg"
        alt="Line Separator"
        width={600}
        height={20}
      />
    </div>
  );
};

export default Conclusion;
