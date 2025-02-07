import Link from "next/link";
import { API, fireApiAction } from "../../config/api";
import constant from "../../config/constant";
import _ from "lodash";
import React from "react";
import Image from "next/image";

async function fetchBlogList() {
  const params = {
    "fields[]": "id, slug, preview_image.*, preview_text",
    "sort[]": "-date_created",
    "filter[status][_eq]": "published",
  };

  try {
    const result = await fireApiAction(API.normal_blogs, "GET", params);
    if (result?.data?.length > 0) {
      return result.data; // Return the blog details
    }
    throw new Error("Not Found");
  } catch (error) {
    return null;
  }
}

async function fetchHeroBanner() {
  const params = {
    "fields[]": "*.*.*",
  };
  try {
    const result = await fireApiAction(
      API.blogs_guides_listing_banners,
      "GET",
      params
    );

    return result.data; // Return the blog details
    throw new Error("Not Found");
  } catch (error) {
    return null;
  }
}

export default async function BlogDetail() {
  const blogList = await fetchBlogList();
  const heroBanner = await fetchHeroBanner();

  return (
    <div>
      <div className="carousel-item w-full relative">
        <div className="relative w-full object-cover h-[600px]">
          <Image
            src={`${constant.REMOTE_IMAGE_ENDPOINT}${heroBanner?.blogs_listing_hero_banner?.filename_disk}`}
            alt={`Blog banneer`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="absolute px-4 text-center text-white"
          style={{
            left: "50%",
            top: "50%", // Adjusted top percentage for better placement
            transform: `translate(-50%, -50%)`,
          }}
        >
          <p className="text-4xl md:text-6xl font-ragilac font-regular">
            Blogs
          </p>
          <p className="text-lg md:text-xl mt-4 font-redHat font-semi">
            Live my journeys with me and through me
          </p>
        </div>
        {/* <img
          src={`/blog_list_banner.svg`}
          className="w-full object-cover h-[600px]"
          alt="Slide 1"
        /> */}
      </div>

      <div className="mt-20 mx-6 md:mx-36">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
          {_.map(blogList, (blog_item, blog_index) => (
            <React.Fragment key={blog_item.id}>
              <div className="border shadow-lg overflow-hidden">
                <div className="relative w-full h-60 object-cover">
                  <Image
                    src={`${constant.REMOTE_IMAGE_ENDPOINT}${blog_item?.preview_image?.filename_disk}`}
                    alt={blog_item?.slug}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <Link href={`/blog/${blog_item?.slug}`}>
                  <p className="text-center p-2 font-redHat font-semibold text-sm underline">
                    {blog_item?.preview_text}
                  </p>
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
