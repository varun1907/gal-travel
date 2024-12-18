import Link from "next/link";
import { API, fireApiAction } from "../../config/api";
import constant from "../../config/constant";
import _ from "lodash";
import React from "react";
import Image from "next/image";

async function fetchBlogList() {
  const params = {
    "sort[]": "-date_created",
    "fields[]":
      "id,slug,country,blog_listing_preview_image.*,blog_listing_cta_text,blog_listing_preview_text",
  };

  try {
    const result = await fireApiAction(API.travel_blogs, "GET", params);
    if (result?.data?.length > 0) {
      return result.data; // Return the blog details
    }
    throw new Error("Not Found");
  } catch (error) {
    return null;
  }
}

async function fetchQuoteList(total_blogs: number) {
  const params = {
    "filter[status][_eq]": "published",
  };

  try {
    const result = await fireApiAction(API.travel_quotes, "GET", params);
    let output: any = [];
    if (result?.data?.length > 0) {
      let number_of_rows = Math.ceil(total_blogs / 4);
      const total_quote = number_of_rows - 1;

      const quotes = result?.data;

      if (total_quote <= quotes.length) {
        // When n is less than or equal to array size, pick unique random values
        const shuffled = [...quotes].sort(() => Math.random() - 0.5); // Shuffle the array
        output = shuffled.slice(0, total_quote);
      } else {
        // When n is more than the array size, allow repetition
        for (let i = 0; i < total_quote; i++) {
          const randomIndex = Math.floor(Math.random() * quotes.length); // Pick random index
          output.push(quotes[randomIndex]);
        }
      }
    }

    return output;
  } catch (error) {
    return null;
  }
}

export default async function BlogDetail() {
  const blogList = await fetchBlogList();
  const quoteList = await fetchQuoteList(blogList?.length);

  return (
    <div>
      <div className="carousel-item w-full relative">
        <div
          className="absolute px-4 text-center text-white"
          style={{
            left: "50%",
            top: "30%", // Adjusted top percentage for better placement
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
        <img
          src={`/blog_list_banner.svg`}
          className="w-full object-cover h-full"
          alt="Slide 1"
        />
      </div>

      <div className="mt-20 mx-6 md:mx-36">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
          {_.map(blogList, (blog_item, blog_index) => (
            <React.Fragment key={blog_item.id}>
              <div
                // key={blog_item.id}
                className="border shadow-lg overflow-hidden"
              >
                <img
                  src={`${constant.REMOTE_IMAGE_ENDPOINT}${blog_item?.blog_listing_preview_image?.filename_disk}`}
                  alt={blog_item?.country}
                  className="w-full h-60 object-cover"
                />

                <p
                  className="text-center pt-4 font-ragilac text-sm px-4"
                  style={{ color: "#C95C5C" }}
                >
                  {blog_item?.blog_listing_preview_text}
                </p>
                <Link href={`/blog/${blog_item?.slug}`}>
                  <p className="text-center p-2 font-redHat font-semibold text-sm underline">
                    {blog_item?.country}
                  </p>
                </Link>
              </div>

              {(blog_index + 1) % 4 === 0 && (
                <div
                  className="col-span-full flex items-center justify-center"
                  style={{ border: "1px dashed #A78B88", height: 175 }}
                >
                  <Image
                    aria-hidden
                    className="mr-3"
                    src="/duck.svg"
                    alt="Duck"
                    width={30}
                    height={35}
                  />
                  <p className="font-redHat text-2xl">
                    {quoteList[Math.floor(blog_index / 4)]?.quote}
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
