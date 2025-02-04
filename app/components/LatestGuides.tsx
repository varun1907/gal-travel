"use client";
import React from "react";
import constant from "../../config/constant";
import Link from "next/link";
import Image from "next/image";

const LatestGuides = ({ is_guide, slug, title, subtitle, image }: any) => {
  return (
    <Link
      href={`/${is_guide ? "guide" : "blog"}/${slug}`}
      prefetch
      className="min-w-full lg:min-w-0 border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <div>
        <div className="h-72 md:h-48 overflow-hidden relative">
          <Image
            src={`${constant.REMOTE_IMAGE_ENDPOINT}${image}`}
            alt={slug}
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="p-4">
          <p className="card-title text-xs text-secondary-content">{title}</p>
          {is_guide && (
            <div className="border-2 border-brown border-solid my-2"></div>
          )}
          <p className="font-redHat font-regular text-base">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default LatestGuides;
