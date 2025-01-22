import React from "react";
import StayDaySection from "./StayDaySection";
import DoDaySection from "./DoDaySection";
import EatDaySection from "./EatDaySection";
import _ from "lodash";

type DetailProps = {
  nav_bar_items: string[];
  blogDetails: any;
};

const BlogDetailDaySection = ({ nav_bar_items, blogDetails }: DetailProps) => {
  return nav_bar_items.map((section: any, section_index: number) => {
    const city_item = _.cloneDeep(blogDetails.cities[section_index]);
    return (
      <section
        key={`section_item_${section_index}`}
        className="py-8 md:py-0 md:pb-12 px-4 md:px-40 gap-8 md:min-h-[60px] md:gap-16"
        id={`${section.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div style={{}} className="flex flex-row flex-1  md:h-[41px]">
          <div
            className="flex justify-center items-center w-[80px] md:w-[163px]"
            style={{ backgroundColor: "#C95C5C" }}
          >
            <p
              className="font-redHat font-medium text-base"
              style={{ color: "#FFFFFF" }}
            >
              {`Day ${_.get(city_item, "cities_id.day_number", "")}`}
            </p>
          </div>
          <div
            className="flex pl-6 items-center"
            style={{ backgroundColor: "#E7BFBF", flex: 1 }}
          >
            <p className="font-redHat font-bold text-base">{`${_.get(
              city_item,
              "cities_id.city_name",
              ""
            )} - ${_.get(city_item, "cities_id.city_tagline", "")}`}</p>
          </div>
        </div>

        <p
          className="text-base font-redHat font-regular mt-7 mx-2 md:mx-44"
          dangerouslySetInnerHTML={{
            __html: city_item?.cities_id?.city_intro_para || "",
          }}
        ></p>
        <StayDaySection city_data={city_item?.cities_id} />
        <DoDaySection city_data={city_item?.cities_id} />
        <EatDaySection city_data={city_item?.cities_id} />
      </section>
    );
  });
};

export default BlogDetailDaySection;
