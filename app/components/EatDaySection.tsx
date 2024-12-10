import React from "react";

const EatDaySection = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col-reverse md:flex-row md:items-center mb-3">
        <div
          className="mt-2 md:mt-0"
          style={{ height: 2, backgroundColor: "#EAD5C4", width: 163 }}
        ></div>
        <p className="font-bold font-redHat pl-0 md:pl-6 text-xl">Eat@nice</p>
      </div>
      <div className="mx-1 md:mx-48">
        <div className="py-8 md:py-12 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ul className="list-decimal pl-5 space-y-4">
              <li>
                <p className="font-redHat text-base">
                  <strong>Café Sprüngli</strong> - While famous for its
                  chocolates, it also offers a delightful pasta menu with a
                  scenic view of Lake Zurich.
                </p>
              </li>
              <li>
                <p className="font-redHat text-base">
                  <strong>Rive Gauche</strong> - Located at the Baur Au Lac
                  hotel, this restaurant offers beautiful views of the lake and
                  serves Italian-inspired pasta dishes in a chic setting.
                </p>
              </li>
              <li>
                <p className="font-redHat text-base">
                  <strong>Feldschlösschen</strong> - This brewery restaurant
                  features a lovely terrace with views over the city and serves
                  delicious homemade pasta alongside other Swiss dishes.
                </p>
              </li>
              <li>
                <p className="font-redHat text-base">
                  <strong>La Pasta</strong> - Known for its fresh pasta, this
                  restaurant has a cozy atmosphere and outdoor seating with
                  views of the surrounding area.
                </p>
              </li>
              <li>
                <p className="font-redHat text-base">
                  <strong>Zunfthaus zur Waag</strong> - This historical building
                  offers traditional Swiss and Italian cuisine, including
                  excellent pasta, with lovely views of the old town.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-8 md:flex-col">
            <div className="w-full">
              <img
                className="w-full h-auto object-cover"
                src="/food.svg"
                alt="Image 1"
              />
            </div>

            <div className="w-full">
              <img
                className="w-full h-auto object-cover"
                src="/food.svg"
                alt="Image 2"
              />
            </div>

            <div className="w-full">
              <img
                className="w-full h-auto object-cover"
                src="/food.svg"
                alt="Image 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EatDaySection;
