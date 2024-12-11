import BlogDetailActivitySection from "@/app/components/BlogDetailActivitySection";
import BlogDetailDaySection from "@/app/components/BlogDetailDaySection";
import BlogDetailIntro from "@/app/components/BlogDetailIntro";
import Conclusion from "@/app/components/Conclusion";
// import { Metadata } from "next";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

// export async function generateMetadata({
//   params,
// }: BlogDetailPageProps): Promise<Metadata> {
//   const { slug } = await params;
//   return {
//     title: slug.replace(/-/g, " "), // Converts slug to a readable title
//   };
// }

export default async function BlogDetail({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  const dynamic_navbar = [
    "Zurich",
    "Lucerne",
    "Interlaken",
    "Zermatt and the Matterhorn",
    "St. Moritz",
    "Schilthorn",
  ];

  const static_navbar = ["Visit", "Reach", "Stay", "Todo", "Eat"];

  const show_place = slug == "1";

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
            <div className="relative flex items-center">
              {/* Navigation Container */}
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
        </section>

        <BlogDetailIntro />
        {show_place ? (
          <BlogDetailDaySection nav_bar_items={nav_bar_items} />
        ) : (
          <BlogDetailActivitySection />
        )}

        <Conclusion />
      </>
    </div>
  );
}
