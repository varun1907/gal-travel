import React from "react";
import _ from "lodash";

const AdditionalActivitySection = ({ activity }: any) => {
  return (
    <section
      className="py-8 md:py-12 gap-8 md:gap-16"
      id={`${activity?.additional_section_nav_text
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
    >
      <div
        style={{ height: 41, backgroundColor: "#E7BFBF" }}
        className="flex items-center pl-6"
      >
        <p className="font-redHat font-bold text-base">
          {activity?.additional_section_header}
        </p>
      </div>

      <div className="mx-4 md:mx-48">
        <p
          className="font-redHat font-medium text-base mt-7 rich_text_links"
          dangerouslySetInnerHTML={{
            __html: activity?.additional_section_para || "",
          }}
        ></p>
      </div>
    </section>
  );
};

export default AdditionalActivitySection;
