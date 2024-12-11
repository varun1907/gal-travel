import React from "react";
import ProTip from "./ProTip";

const TodoActivitySection = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-16 gap-8 md:gap-16" id="todo">
      <div
        style={{ height: 41, backgroundColor: "#E7BFBF" }}
        className="flex items-center pl-6"
      >
        <p className="font-redHat font-bold text-base">What To Do</p>
      </div>

      <div className="">
        {[1, 2, 3, 4, 5].map((todo_item, todo_index) => (
          <div key={`todoitem_${todo_index}`} className="mt-4 md:mt-16">
            <div className="flex flex-col-reverse md:flex-row md:items-center mb-3">
              <div
                className="mt-2 md:mt-0"
                style={{ height: 2, backgroundColor: "#EAD5C4", width: 163 }}
              ></div>
              <p className="font-bold font-redHat pl-1 md:pl-6 text-xl">{`#${
                todo_index + 1
              } Effiel Tower`}</p>
            </div>
            <div className="mx-1 md:mx-48">
              <p className="font-redHat font-medium text-base mt-5">
                The Eiffel Tower is to Paris what almond biscotti is to a cup of
                coffee one cannot be without the other! I highly recommend
                visiting the Eiffel Tower first thing on your trip to check off
                the biggest must-see early, so you can relax and enjoy the rest
                of your time. Book your online tickets much in advance and
                arrive by 9:30 am when it opens to avoid the heavy crowds that
                build up during tourist season. And don’t forget to pack a scarf
                or a jacket because it is always windy on the 3rd-floor viewing
                deck.
              </p>
              <p className="font-redHat font-medium text-base mt-7">
                There are a few great spots where youll get fab Eiffel Tower
                shots in the background. One is right in the Champ De Mars
                (pronounced shaun-the-mass), the park where the tower stands.
                For a long shot, go to Trocadéro which is opposite the park. For
                another equally pretty angle, head down from Trocadéro to the
                Pont dIna,(pronounced pon-dee-yena) the bridge that brings you
                right up close to the Eiffel Tower.
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

              <ProTip />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodoActivitySection;
