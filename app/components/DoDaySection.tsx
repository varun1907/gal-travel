import React from "react";
import FunFact from "./FunFact";
import ProTip from "./ProTip";

const DoyDaySection = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col-reverse md:flex-row md:items-center mb-3">
        <div
          className="mt-2 md:mt-0"
          style={{ height: 2, backgroundColor: "#EAD5C4", width: 163 }}
        ></div>
        <p className="font-bold font-redHat pl-0 md:pl-6 text-xl">Do@nice</p>
      </div>
      <div className="mx-1 md:mx-48">
        <p className="text-base font-redHat mb-3">
          The most iconic feature of the modern city is the renowned Promenade
          des Anglais, originally built in 1822 by the English community as a
          coastal path. Stretching 2.5 miles (4 km) along the waterfront, it’s
          got 2 wide carriageways lined with flower beds and swaying palm trees.
          Spend your first morning strolling along the Promenade des Anglais and
          take in the gorgeous Mediterranean views.
        </p>
        <p className="text-base font-redHat mb-3">
          Whenever I am in Nice, I make it a point to visit the local Cours
          Saleya Market that is always pulsating with locals and tourists. You
          can spend a languorous half hour strolling and shopping, taking photos
          of the colourful displays of fresh produce and fresh flowers, or enjoy
          a leisurely late breakfast at a café there.
        </p>
        <FunFact />
        <ProTip />
        <p className="text-base font-redHat mb-3">
          The most iconic feature of the modern city is the renowned Promenade
          des Anglais, originally built in 1822 by the English community as a
          coastal path. Stretching 2.5 miles (4 km) along the waterfront, it’s
          got 2 wide carriageways lined with flower beds and swaying palm trees.
          Spend your first morning strolling along the Promenade des Anglais and
          take in the gorgeous Mediterranean views.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
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
    </div>
  );
};

export default DoyDaySection;
