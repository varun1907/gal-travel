"use client";
import React from "react";
import Image from "next/image";

const PortraitPhoto = () => {
  return (
    <div
      style={{
        width: 310,
        height: 346,
        border: "0.75px dashed #A78B88",
        padding: 10,
        transform: "rotate(10deg)",
      }}
    >
      <div
        style={{
          width: 290,
          height: 326,
          backgroundColor: "#FFFFFF",
          padding: 10,
          boxShadow: `0px 5.84px 9.74px 0px #24242440`,
        }}
      >
        <Image
          aria-hidden
          src="/temp_travel.svg"
          alt="Footer line"
          width={270}
          height={306}
        />
      </div>
    </div>
  );
};

export default PortraitPhoto;
