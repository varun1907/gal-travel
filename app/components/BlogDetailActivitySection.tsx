import React from "react";
import VisitActivitySection from "./VisitActivitySection";
import ReachActivitySection from "./ReachActivitySection";
import StayActivitySection from "./StayActivitySection";
import TodoActivitySection from "./TodoActivitySection";
import EatActivitySection from "./EatActivitySection";

// type DetailProps = {
//   nav_bar_items: string[];
// };

const BlogDetailActivitySection = () => {
  return (
    <section
      className="py-8 md:py-12 px-4 md:px-16 gap-8 md:gap-16"
      // id={`${section.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <VisitActivitySection />
      <ReachActivitySection />
      <StayActivitySection />
      <TodoActivitySection />
      <EatActivitySection />
    </section>
  );
};

export default BlogDetailActivitySection;
