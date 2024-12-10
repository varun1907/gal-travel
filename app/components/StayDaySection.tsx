import React from "react";

const guides = [
  {
    country: "Europe",
    title: "10 Days of Swiss Bliss: A First-Timer’s Luxury Trip to Switzerland",
    image: "/latest-1.svg", // Replace with the actual path to your image
  },
  {
    country: "COUNTRY NAME",
    title: "Another blog title goes over here",
    image: "/latest-2.svg",
  },
  {
    country: "COUNTRY NAME",
    title: "Another blog title goes over here",
    image: "/latest-3.svg",
  },
];

const StayDaySection = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col-reverse md:flex-row md:items-center mb-3">
        <div
          className="mt-2 md:mt-0"
          style={{ height: 2, backgroundColor: "#EAD5C4", width: 163 }}
        ></div>
        <p className="font-bold font-redHat pl-0 md:pl-6 text-xl">Stay@nice</p>
      </div>
      <div className="mx-1 md:mx-48">
        <p className="text-base font-redHat mb-3">
          Nice has some great options for mid-luxury romantic escapes or
          intimate getaways. You will find hotels across the entire tariff
          spectrum, but here are some of my favourites that I keep going back
          to:
        </p>
        {[1, 2, 3, 4, 5].map((places, place_index) => (
          <p
            key={`stay_palces_${place_index}`}
            className="text-base font-redHat"
          >{`${places}. Le Negresco `}</p>
        ))}

        <div className="flex space-x-6 overflow-x-scroll scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-2 lg:overflow-hidden pb-4 mt-4">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="min-w-full lg:min-w-0 border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ boxShadow: `0px 4px 10px 0px #24242440` }}
            >
              <div className="h-72 md:h-48 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-1 flex justify-center">
                <p
                  className="text-lg font-ragilac text-secondary-content "
                  style={{ color: "C95C5C" }}
                >
                  {guide.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StayDaySection;
