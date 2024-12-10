import React from "react";

const VisitActivitySection = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-16 gap-8 md:gap-16">
      <div
        style={{ height: 41, backgroundColor: "#E7BFBF" }}
        className="flex items-center pl-6"
      >
        <p className="font-redHat font-bold text-base">
          The Best Time To Visit
        </p>
      </div>

      <div className="mx-1 md:mx-48">
        <p className="text-base font-redHat font-regular mt-7">
          Spring (March to May): offers ideal weather with delicate cherry
          blossoms, making it romantic and less crowded.
        </p>
        <p className="text-base font-redHat font-regular mt-7">
          Autumn (September to November): brings pleasant temperatures, fewer
          tourists, and stunning fall colours.{" "}
        </p>
        <p className="text-base font-redHat font-regular mt-7">
          Summer (June to August): is warm and lively, though it can be crowded
          and pricey.
        </p>
        <p className="text-base font-redHat font-regular mt-7">
          Winter (December to February): may be cold, but it's
          magical—especially during the holiday season, when the city is adorned
          with festive lights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mt-4">
          <div
            className="md:col-span-1 border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{ boxShadow: `0px 4px 10px 0px #24242440` }}
          >
            <img
              src="/latest-1.svg"
              alt="Image 1"
              className="w-full h-[200px] md:h-[410px] object-cover"
            />
            <div className="p-1 flex justify-center">
              <p
                className="text-lg font-ragilac text-secondary-content"
                style={{ color: "C95C5C" }}
              >
                Do 1
              </p>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div
              className="border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ boxShadow: `0px 4px 10px 0px #24242440` }}
            >
              <img
                src="/latest-2.svg"
                alt="Image 2"
                className="w-full h-[200px] md:h-[180px] object-cover"
              />
              <div className="p-1 flex justify-center">
                <p
                  className="text-lg font-ragilac text-secondary-content"
                  style={{ color: "C95C5C" }}
                >
                  Do 2
                </p>
              </div>
            </div>
            <div
              className="border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ boxShadow: `0px 4px 10px 0px #24242440` }}
            >
              <img
                src="/latest-3.svg"
                alt="Image 3"
                className="w-full h-[200px] md:h-[180px] object-cover"
              />
              <div className="p-1 flex justify-center">
                <p
                  className="text-lg font-ragilac text-secondary-content"
                  style={{ color: "C95C5C" }}
                >
                  Do 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitActivitySection;
