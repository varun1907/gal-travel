"use client";
import React from "react";
import constant from "../../config/constant";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LatestGuides = ({ latest_item }: any) => {
  // const router = useRouter();

  const handleClick = () => {
    // router.push(`/blog/${latest_item?.slug}`);
  };

  return (
    <Link
      href={`/guide/${latest_item?.slug}`}
      prefetch
      // className="min-w-full lg:min-w-0 border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
    <div
      // onClick={handleClick}
      className="min-w-full lg:min-w-0 border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <div className="h-72 md:h-48 overflow-hidden">
        <img
          src={`${constant.REMOTE_IMAGE_ENDPOINT}${latest_item?.blog_listing_preview_image?.filename_disk}`}
          alt={latest_item?.country}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="card-title text-xs text-secondary-content">
          {latest_item?.country}
        </p>
        <div className="border-2 border-brown border-solid my-2"></div>
        <p className="font-redHat font-regular text-base">
          {`${latest_item?.blog_listing_cta_text}: ${latest_item?.blog_listing_preview_text}`}
        </p>
      </div>
    </div>
    </Link>
  );
};

export default LatestGuides;
