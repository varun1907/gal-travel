import constant from "../../../config/constant";

import { Metadata } from "next";
import { API, fireApiAction } from "../../../config/api";
import _ from "lodash";
import LatestGuides from "@/app/components/LatestGuides";
import Image from "next/image";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}



async function fetchBlogDetails(slug: string) {
  const params = {
    "filter[slug][_eq]": slug,
    "fields[]": "*.*.*",
  };

  try {
    const result = await fireApiAction(API.normal_blogs, "GET", params);

    if (result?.data?.length === 1) {
      return result.data[0]; // Return the blog details
    }
    throw new Error("Not Found");
  } catch (error) {
    return null;
  }
}

async function fetchLatestGuides(slug: string): Promise<any[]> {
  const params = {
    "fields[]": "id, slug, preview_image.*, preview_text",
    "sort[]": "-date_created",
    "filter[status][_eq]": "published",
  };

  try {
    const result = await fireApiAction(API.normal_blogs, "GET", params);
    if (result?.data && result?.data?.length > 0) {
      const arr = _.cloneDeep(result.data);
      const filterd_arr = _.filter(arr, (item) => item?.slug != slug);
      filterd_arr.splice(3);
      return filterd_arr;
    }
    throw new Error("Not Found");
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({params}:BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blogDetails = await fetchBlogDetails(slug);
  const seo = blogDetails?.seo; // Assuming `seo` is part of `blogDetails`
  return {
    title: seo?.title || "Home Title",
    description: seo?.meta_description || "home Description",
    alternates: {
      canonical: seo?.canonical_url || "https://your-default-url.com",
    },
    robots: {
      index: !seo?.no_index,
      follow: !seo?.no_follow,
    },
    openGraph: {
      title: seo?.title || "Home Title",
      description: seo?.meta_description || "Home Description",
      images: seo?.og_image
        ? [
            {
              url: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${seo.og_image.filename_disk}`,
              width: seo.og_image.width,
              height: seo.og_image.height,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogDetail({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  const [blogDetails, latestGuides] = await Promise.all([
    fetchBlogDetails(slug),
    fetchLatestGuides(slug),
  ]);

  if (!blogDetails) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
        <p>Please try again later or contact support.</p>
      </div>
    );
  }

  return (
    <div>
      <>
        <section className="relative">
          <div
            className="h-[600px] bg-cover bg-center"
            style={{
              backgroundImage: `url(https://admin.galtravelbychandni.com/assets/${blogDetails?.hero_banner?.filename_disk}`,
            }}
          >
            <div className="flex flex-col justify-center items-center text-center h-full text-white bg-black bg-opacity-50">
              <h1 className="font-ragilac text-4xl md:text-5xl font-bold mb-4">
                {blogDetails?.hero_title}
              </h1>
              <p className="font-redHat text-xl md:text-2xl font-medium px-20 md:px-0">
                {blogDetails?.hero_subtitle}
              </p>
            </div>
          </div>

          <section className="md:py-12 md:pb-0 px-4 md:px-40 flex flex-col-reverse md:flex-row gap-8 md:gap-16">
            <div className=" md:px-16 py-0">
              <div className="p-5">
                <p
                  className="font-redHat font-medium text-base mt-0 md:mt-7 mb-5"
                  dangerouslySetInnerHTML={{
                    __html: blogDetails?.blog_content || "",
                  }}
                ></p>

                <img
                  src={`${constant.REMOTE_IMAGE_ENDPOINT}${blogDetails?.preview_image?.filename_disk}`}
                  className="w-full h-[278px] md:h-[378px]"
                />
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <div
                className="relative w-[294px] h-[376px]  rotate-6 overflow-hidden"
                style={{ zIndex: 30 }}
              >
                <div className="flex">
                  <div
                    className="bg-white p-3 shadow-md mx-auto w-[274px]  h-[346px] "
                    style={{ marginTop: 8 }}
                  >
                    <div className="relative w-[250px] h-[265px]">
                      <Image
                        src={`${constant.REMOTE_IMAGE_ENDPOINT}${blogDetails?.polaroid_image?.filename_disk}`}
                        alt={"About landing"}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <p
                      className="font-ragilac mt-1 text-center md:mt-2"
                      style={{ fontSize: 18 }}
                    >
                      {blogDetails?.polaroid_caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="px-4 md:px-40 flex items-center justify-center">
            <Image
              aria-hidden
              className="my-10 mb-0 self-center"
              src="/line_separator.svg"
              alt="Line Separator"
              width={600}
              height={20}
            />
          </div>

          {latestGuides?.length > 0 && (
            <div className="mb-10 md:mb-24 px-4 md:px-32">
              <p className="font-redHat font-medium text-xl mb-5">
                Read other blogs
              </p>
              <div className="flex space-x-6 overflow-x-scroll scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-hidden">
                {_.map(latestGuides, (latest_item, latest_index) => (
                  <LatestGuides
                    key={`latest_item_${latest_index}`}
                    latest_item={latest_item}
                  />
                ))}
              </div>
              <div className="flex md:hidden flex-row gap-2 justify-center items-center mt-4">
                {_.map([1, 2, 3], (dot_item, dot_iddex) => (
                  <div
                    key={`dot_item_${dot_iddex}`}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: "#C95C5C",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </section>
      </>
    </div>
  );
}
