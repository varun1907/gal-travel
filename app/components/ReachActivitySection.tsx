import React from "react";

const ReachActivitySection = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-16 gap-8 md:gap-16">
      <div
        style={{ height: 41, backgroundColor: "#E7BFBF" }}
        className="flex items-center pl-6"
      >
        <p className="font-redHat font-bold text-base">How to reach Paris</p>
      </div>

      <div className="mx-1 md:mx-48">
        <p className="font-redHat font-medium text-base mt-7">
          There are multiple Indian and international airlines that have direct
          flights from all major cities in India to Paris. Some airlines like
          Air France have great stopover programs that allow you to add a free
          stopover on award tickets on the return segment. If you are a member
          of the Flying Blue program or hold any other frequent flyer miles, do
          check your eligibility for that airline’s stopover programs and plan
          accordingly. 
        </p>
      </div>
    </section>
  );
};

export default ReachActivitySection;
