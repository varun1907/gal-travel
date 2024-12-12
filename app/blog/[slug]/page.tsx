import BlogDetailActivitySection from "@/app/components/BlogDetailActivitySection";
import BlogDetailDaySection from "@/app/components/BlogDetailDaySection";
import BlogDetailIntro from "@/app/components/BlogDetailIntro";
import Conclusion from "@/app/components/Conclusion";
import { Metadata } from "next";
import { API, fireApiAction } from "../../../config/api";
import _ from "lodash";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, " "), // Converts slug to a readable title
  };
}

async function fetchBlogDetails(slug: string) {
  const params = {
    "filter[slug][_eq]": slug,
    "filter[status][_eq]": "published",
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
    console.error("Failed to fetch blog details:", error);
    return null;
  }
}

export default async function BlogDetail({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  const blogDetails = await fetchBlogDetails(slug);

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
    nav_bar_items = ["Visit", "Reach", "Stay", "Todo", "Eat"];
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {blogDetails?.blog_title}
              </h1>
              <p className="text-xl md:text-2xl font-medium">
                {blogDetails?.blog_subtitle}
              </p>
            </div>
          </div>

          <div className="sticky top-0 z-50 bg-gray-100 border-t border-gray-300">
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
          <BlogDetailIntro blogDetails={blogDetails} />
          {show_cities ? (
            <BlogDetailDaySection
              nav_bar_items={nav_bar_items}
              blogDetails={blogDetails}
            />
          ) : (
            <BlogDetailActivitySection activity={blogDetails?.activity} />
          )}

          <Conclusion blogDetails={blogDetails} />
        </section>
      </>
    </div>
  );
}
