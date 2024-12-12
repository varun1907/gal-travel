import React from "react";
import VisitActivitySection from "./VisitActivitySection";
import ReachActivitySection from "./ReachActivitySection";
import StayActivitySection from "./StayActivitySection";
import TodoActivitySection from "./TodoActivitySection";
import EatActivitySection from "./EatActivitySection";
import AdditionalActivitySection from "./AdditionalActivitySection";
import _ from "lodash";

const BlogDetailActivitySection = ({ activity }: any) => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-16 gap-8 md:gap-16">
      <VisitActivitySection activity={activity} />
      <ReachActivitySection activity={activity} />
      <StayActivitySection activity={activity} />
      <TodoActivitySection activity={activity} />
      <EatActivitySection activity={activity} />
      {!_.isEmpty(activity?.additional_section_header) &&
        !_.isEmpty(activity?.additional_section_nav_text) &&
        !_.isEmpty(activity?.additional_section_para) && (
          <AdditionalActivitySection activity={activity} />
        )}
    </section>
  );
};

export default BlogDetailActivitySection;
