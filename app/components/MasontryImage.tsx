"use client";
import React from "react";
// import Image from "next/image";
// import dynamic from "next/dynamic";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// const guides = [
//   {
//     location: "Switzerland",
//     image: "/dummy_full.svg", // Replace with the actual image path
//   },
//   {
//     location: "Paris",
//     image: "/dummy_full.svg",
//   },
//   {
//     location: "New York",
//     image: "/dummy_full.svg",
//   },
//   {
//     location: "Switzerland",
//     image: "/dummy_full.svg",
//   },
// ];

const MasonryImage = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 900: 2 }}>
      <Masonry columnsCount={2}>
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={`guide_item_${index}`}
            className={`card card-compact bg-base-100 w-60 shadow-xl mt-5 rounded-none`}
            style={{
              flexBasis: "32%",
              marginRight: 20,
              minHeight: index === 1 || index === 2 ? 300 : 270,
            }}
          >
            {/* <figure> */}
            <img
              src={"../../dummy_full.svg"}
              alt="Shoes"
              width={"100%"}
              height={index === 1 || index === 2 ? 100 : 50}
            />
            {/* </figure> */}
            <div
              className="card-body"
              style={{
                padding: 0,
                paddingTop: 4,
                paddingBottom: 4,
                // border: "1px solid green",
              }}
            >
              <p className="font-redHat font-regular text-lg text-secondary-content text-center">
                10 Days
              </p>
            </div>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImage;
