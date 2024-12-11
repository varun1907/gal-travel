import BlogDetailActivitySection from "@/app/components/BlogDetailActivitySection";
import BlogDetailDaySection from "@/app/components/BlogDetailDaySection";
import BlogDetailIntro from "@/app/components/BlogDetailIntro";
import Conclusion from "@/app/components/Conclusion";
// import { Metadata } from "next";

// interface BlogDetailPageProps {
//   params: { slug: string }; // Define the dynamic route parameter
// }

// export async function generateMetadata({
//   params,
// }: BlogDetailPageProps): Promise<Metadata> {
//   const slug = decodeURIComponent(params.slug); // Decode slug for special characters
//   return {
//     title: slug.replace(/-/g, " "), // Converts slug to a readable title
//   };
// }

export default async function BlogDetail() {
  // { params }: BlogDetailPageProps
  // const { slug } = params;

  // Fetch blog data based on the slug (replace this with actual fetching logic)
  // const blog = {
  //   title: slug.replace(/-/g, " "),
  //   content: "This is dynamically fetched content for the blog.",
  // };

  const dynamic_navbar = [
    "Zurich",
    "Lucerne",
    "Interlaken",
    "Zermatt and the Matterhorn",
    "St. Moritz",
    "Schilthorn",
  ];

  const static_navbar = ["Visit", "Reach", "Stay", "Todo", "Eat"];

  const show_place = !true;

  const nav_bar_items = show_place ? dynamic_navbar : static_navbar;

  return (
    <div>
      <>
        <section className="relative">
          <div
            className="h-[600px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/carosel-2.jpeg')",
            }}
          >
            <div className="flex flex-col justify-center items-center text-center h-full text-white bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                10 Days of Swiss Bliss:
              </h1>
              <p className="text-xl md:text-2xl font-medium">
                A First-Timers Luxury Trip to Switzerland
              </p>
            </div>
          </div>

          <div className="bg-gray-100 border-t border-gray-300">
            <div className="flex overflow-x-auto md:overflow-visible md:flex-nowrap items-center justify-start md:justify-between scrollbar-hide space-x-0 md:space-x-0">
              {nav_bar_items.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-redHat flex-shrink-0 md:flex-1 text-center py-3 px-4 md:py-4 md:px-6 text-sm md:text-base border-r border-gray-300 md:border-none last:border-r-0"
                  style={{
                    backgroundColor: "#EAD5C4",
                    borderRight: "1px solid black",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </section>

        <BlogDetailIntro />
        {show_place ? <BlogDetailDaySection /> : <BlogDetailActivitySection />}

        <Conclusion />
      </>
    </div>
  );
}
