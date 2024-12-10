import React from "react";
import StayDaySection from "./StayDaySection";
import DoDaySection from "./DoDaySection";
import EatDaySection from "./EatDaySection";

const BlogDetailDaySection = () => {
  return [1, 2, 3, 4, 5, 6].map((section, section_index) => (
    <section
      key={`section_item_${section_index}`}
      className="py-8 md:py-12 px-4 md:px-16 gap-8 md:gap-16"
      // id={`${section.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div style={{ height: 41 }} className="flex flex-row flex-1">
        <div
          className="flex justify-center items-center w-[80px] md:w-[163px]"
          style={{ backgroundColor: "#C95C5C" }}
        >
          <p
            className="font-redHat font-medium text-base"
            style={{ color: "#FFFFFF" }}
          >
            Day 1
          </p>
        </div>
        <div
          className="flex pl-6 items-center"
          style={{ backgroundColor: "#E7BFBF", flex: 1 }}
        >
          <p className="font-redHat font-bold text-base">Nice</p>
        </div>
      </div>

      <p className="text-base font-redHat font-regular mt-7 mx-2 md:mx-44">
        Welcome to Nice (pronounced nees), the heart of the French Riviera where
        the sea is bluer than blue. Did you know that in 4th century BC, Nice
        was called Nike-town, in honour of Nikaia, after the Greek goddess of
        victory? Over the past 150 years, Nice has transformed into a vibrant
        artistic hub and a trendy holiday destination rich in history. As one of
        France’s largest cities, Nice is the second-largest on the Mediterranean
        coast and in the Provence-Alpes-Côte d'Azur région, just after
        Marseille.
      </p>
      <StayDaySection />
      <DoDaySection />
      <EatDaySection />
    </section>
  ));
};

export default BlogDetailDaySection;
