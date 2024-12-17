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
    <div className="mx-5 md:mx-28 flex flex-col">
      <div
        className="flex flex-col md:flex-row pl-10 py-8 pr-8 gap-10"
        style={{ backgroundColor: "#EAD5C4" }}
      >
        <div className="flex-1">
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
            className="font-redHat text-base mt-3"
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

        <div className="flex-1">
          <div
            style={{
              boxShadow: `0px 4px 4px 0px #24242440`,
            }}
          >
            <div
              style={{ backgroundColor: "#FFFFFF", paddingTop: 0 }}
              className="p-1"
            >
              <Image
                aria-hidden
                src={`${constant.REMOTE_IMAGE_ENDPOINT}${image}`}
                alt="Conclusion image"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
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
