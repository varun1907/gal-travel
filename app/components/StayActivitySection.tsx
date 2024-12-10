import React from "react";

const guides = [
  {
    country: "Europe",
    title: "10 Days of Swiss Bliss: A First-Timers Luxury Trip to Switzerland",
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

const StayActivitySection = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-16 gap-8 md:gap-16">
      <div
        style={{ height: 41, backgroundColor: "#E7BFBF" }}
        className="flex items-center pl-6"
      >
        <p className="font-redHat font-bold text-base">Where to Stay</p>
      </div>

      <div className="mx-1 md:mx-48">
        <p className="font-redHat font-medium text-base mt-7">
          Luxury hotels jostle for your attention in Paris, where you spoilt for
          choice between contemporary hotels, heritage hotels and iconic
          landmarks. Bring your Black Card along live it up in style (just
          joking, regular credit cards will also do!). Here are my top picks for
          luxury hotels in Paris.
        </p>

        <p className="font-redHat font-medium text-base mt-7">
          Peninsula Hotel Paris –a renovated, century-old, heritage building 
          and one of the finest hotels in Paris
        </p>
        <p className="font-redHat font-medium text-base mt-7">
          Shangri-La hotel, Paris- a palace hotel located across the Seine and
          faces the Eiffel Tower
        </p>
        <p className="font-redHat font-medium text-base mt-7">
          Four Seasons Hotel George V Paris – Oversized suites with Eiffel Tower
          views. 
        </p>
        <p className="font-redHat font-medium text-base mt-7">
          Le Terrass Hotel Paris - sweeping views of the city.  Hotel de Crillon
          Paris – an iconic landmark overlooking the Place de la Concorde
        </p>

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
    </section>
  );
};

export default StayActivitySection;
