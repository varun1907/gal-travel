export const revalidate = false;
import BlogDetailActivitySection from "@/app/components/BlogDetailActivitySection";
import BlogDetailDaySection from "@/app/components/BlogDetailDaySection";
import BlogDetailIntro from "@/app/components/BlogDetailIntro";
import Conclusion from "@/app/components/Conclusion";
import { Metadata } from "next";
import { API, fireApiAction } from "../../../config/api";
import _ from "lodash";
import LatestGuides from "@/app/components/LatestGuides";
import constant from "../../../config/constant";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

async function fetchBlogDetails(slug: string) {
  const params = {
    "filter[slug][_eq]": slug,
    "fields[]":
      "id,country,blog_title,blog_subtitle,introduction_para,slug,introduction_sub_para,travel_type,conclusion_heading,conclusion_content,blog_listing_preview_text,blog_listing_cta_text,hero_banner_image.*,intro_map_image.*,intro_postcard_image.*,conclusion_image.*,blog_listing_preview_image.*,intro_polaroid_image.*,intro_polaroid_caption,seo.*.*,cities.*.*.*,activity.*.*.*.*",
  };

  try {
    const result = await fireApiAction(API.travel_blogs, "GET", params);

    if (result?.data?.length === 1) {
      return result.data[0]; // Return the blog details
    }
    throw new Error("Not Found");
  } catch (error) {
    return null;
  }
}

async function fetchLatestGuides(slug: string) {
  const params = {
    "fields[]":
      "id,slug,country,blog_listing_preview_image.*,blog_listing_cta_text,blog_listing_preview_text",
    "sort[]": "-date_created",
    "filter[status][_eq]": "published",
  };

  try {
    const result = await fireApiAction(API.travel_blogs, "GET", params);
    if (result?.data && result?.data?.length > 0) {
      const arr = _.cloneDeep(result.data);
      const filterd_arr = _.filter(arr, (item) => item?.slug != slug);
      filterd_arr.splice(3);
      return filterd_arr;
    }
    throw new Error("Not Found");
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blogDetails = await fetchBlogDetails(slug);
  const seo = blogDetails?.seo; // Assuming `seo` is part of `blogDetails`

  return {
    title: seo?.title || "GalTravel By Chandni",
    description: seo?.meta_description || "Your ultimate travel guide",
    other: {
      author: "Chandni", // Add the author meta tag here
    },
    alternates: {
      canonical: seo?.canonical_url || "https://galtravelbychandni.com/",
    },
    robots: {
      index: !seo?.no_index,
      follow: !seo?.no_follow,
    },
    openGraph: {
      title: seo?.title || "GalTravel By Chandni",
      description: seo?.meta_description || "Your ultimate travel guide",
      images: seo?.og_image
        ? [
            {
              url: `${constant.REMOTE_IMAGE_ENDPOINT}${seo.og_image.filename_disk}`,
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

  // const blogDetails = await fetchBlogDetails(slug);
  // const latestGuides = await fetchLatestGuides(slug);

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

  let nav_bar_items = [];
  if (blogDetails?.travel_type === "city_based") {
    nav_bar_items = _.map(
      blogDetails?.cities,
      (item) => item?.cities_id?.city_name
    );
  } else {
    nav_bar_items = ["Visit", "Reach", "Stay", "To Do", "Eat"];

    if (
      !_.isEmpty(blogDetails?.activity?.shop_para) &&
      !_.isEmpty(blogDetails?.activity?.shop_image_1) &&
      !_.isEmpty(blogDetails?.activity?.shop_image_2) &&
      !_.isEmpty(blogDetails?.activity?.shop_image_3)
    ) {
      nav_bar_items.push("Shop");
    }

    if (
      !_.isEmpty(blogDetails?.activity?.additional_section_header) &&
      !_.isEmpty(blogDetails?.activity?.additional_section_nav_text) &&
      !_.isEmpty(blogDetails?.activity?.additional_section_para)
    ) {
      nav_bar_items.push(blogDetails?.activity?.additional_section_nav_text);
    }
  }

  const show_cities = blogDetails?.travel_type === "city_based";

  return (
    <div>
      <>
        <section className="relative">
          <div
            className="h-[600px] bg-cover bg-center"
            style={{
              backgroundImage: `url(https://admin.galtravelbychandni.com/assets/${blogDetails?.hero_banner_image?.filename_disk}`,
            }}
          >
            <div className="flex flex-col justify-center items-center text-center h-full text-white bg-black bg-opacity-50">
              <h1 className="font-ragilac text-4xl md:text-5xl font-bold mb-4">
                {blogDetails?.blog_title}
              </h1>
              <p className="font-redHat text-xl md:text-2xl font-medium px-20 md:px-0">
                {blogDetails?.blog_subtitle}
              </p>
            </div>
          </div>

          <div className="sticky top-20 md:top-24 z-30 bg-gray-100 border-t border-gray-300">
            <div className="relative flex items-center">
              <div className="flex items-center overflow-x-auto md:overflow-visible md:flex-nowrap justify-start md:justify-between scrollbar-hide space-x-0 md:space-x-0 w-full">
                {nav_bar_items.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="font-redHat flex-shrink-0 text-center py-3 px-4 text-sm md:flex-1 md:px-6 border-r border-gray-300 md:border-none last:border-r-0 whitespace-nowrap overflow-hidden text-ellipsis"
                    style={{
                      backgroundColor: "#EAD5C4",
                      borderRight: "1px solid black",
                      width: "50%", // Two items in mobile view
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              {/* <div className="absolute right-0 top-0 h-full flex items-center md:hidden">
                <div
                  className="bg-gray-200 h-6 w-6 flex items-center justify-center rounded-full"
                  style={{
                    backgroundColor: "#EAD5C4",
                  }}
                >
                  &gt;
                </div>
              </div> */}
            </div>
          </div>
          <BlogDetailIntro
            para={blogDetails?.introduction_para}
            subpara={blogDetails?.introduction_sub_para}
            map_image={blogDetails?.intro_map_image?.filename_disk}
            polaroid_image={blogDetails?.intro_polaroid_image?.filename_disk}
            polariad_caption={blogDetails?.intro_polaroid_caption}
          />
          {show_cities ? (
            <BlogDetailDaySection
              nav_bar_items={nav_bar_items}
              blogDetails={blogDetails}
            />
          ) : (
            <BlogDetailActivitySection activity={blogDetails?.activity} />
          )}

          <Conclusion
            heading={blogDetails?.conclusion_heading}
            content={blogDetails?.conclusion_content}
            image={blogDetails?.conclusion_image?.filename_disk}
          />

          <div className="mb-10 md:mb-24 px-4 md:px-32">
            <p className="font-redHat font-medium text-xl mb-5">
              Read other guides
            </p>
            <div className="flex space-x-6 overflow-x-scroll scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-hidden">
              {_.map(latestGuides, (latest_item, latest_index) => (
                <LatestGuides
                  key={`latest_item_${latest_index}`}
                  is_guide={true}
                  slug={latest_item?.slug}
                  title={latest_item?.country}
                  subtitle={`${latest_item?.blog_listing_cta_text}: ${latest_item?.blog_listing_preview_text}`}
                  image={latest_item?.blog_listing_preview_image?.filename_disk}
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
        </section>
      </>
    </div>
  );
}
