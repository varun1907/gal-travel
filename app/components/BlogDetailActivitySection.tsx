import React from "react";
import VisitActivitySection from "./VisitActivitySection";
import ReachActivitySection from "./ReachActivitySection";
import StayActivitySection from "./StayActivitySection";
import TodoActivitySection from "./TodoActivitySection";
import EatActivitySection from "./EatActivitySection";
import AdditionalActivitySection from "./AdditionalActivitySection";
import _ from "lodash";
import ShopActivitySection from "./ShopActivitySection";

const BlogDetailActivitySection = ({ activity }: any) => {
  return (
    <section className="py-8 md:py-0 px-4 md:px-40 gap-8 md:gap-16">
      <VisitActivitySection activity={activity} />
      <ReachActivitySection activity={activity} />
      <StayActivitySection activity={activity} />
      <TodoActivitySection activity={activity} />
      <EatActivitySection activity={activity} />
      {!_.isEmpty(activity?.shop_para) &&
        !_.isEmpty(activity?.shop_image_1) &&
        !_.isEmpty(activity?.shop_image_2) &&
        !_.isEmpty(activity?.shop_image_3) && (
          <ShopActivitySection activity={activity} />
        )}
      {!_.isEmpty(activity?.additional_section_header) &&
        !_.isEmpty(activity?.additional_section_nav_text) &&
        !_.isEmpty(activity?.additional_section_para) && (
          <AdditionalActivitySection activity={activity} />
        )}
    </section>
  );
};

export default BlogDetailActivitySection;
