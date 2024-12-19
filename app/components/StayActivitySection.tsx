import React from "react";
import ProTip from "./ProTip";
import _ from "lodash";
import constant from "../../config/constant";

const StayActivitySection = ({ activity }: any) => {
  return (
    <section className="pt-8 md:pt-12 gap-8 md:gap-16" id="stay">
      <div
        style={{ height: 41, backgroundColor: "#E7BFBF" }}
        className="flex items-center pl-0 md:pl-6"
      >
        <p className="font-redHat font-bold text-base">Where to Stay</p>
      </div>

      <div className="mx-1 md:mx-48">
        <p
          className="font-redHat font-medium text-base mt-7"
          dangerouslySetInnerHTML={{
            __html: activity?.stay_para || "",
          }}
        ></p>

        <div className="flex space-x-6 overflow-x-scroll scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-2 lg:overflow-hidden pb-4 mt-4">
          {[1, 2, 3].map((guide, index) => {
            const img_key_name = `stay_image_${guide}`;
            const caption_key_name = `stay_image_${guide}_caption`;
            return (
              <div
                key={index}
                className="min-w-full lg:min-w-0 border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ boxShadow: `0px 4px 10px 0px #24242440` }}
              >
                <div className="h-72 md:h-48 overflow-hidden">
                  <img
                    src={`${constant.REMOTE_IMAGE_ENDPOINT}${activity?.[img_key_name]?.filename_disk}`}
                    alt={activity?.[caption_key_name]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-1 flex justify-center">
                  <p
                    className="text-lg font-ragilac text-secondary-content "
                    style={{ color: "C95C5C" }}
                  >
                    {activity?.[caption_key_name]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex md:hidden flex-row gap-2 justify-center items-center">
          {_.map([1, 2, 3], (dot_item, dot_iddex) => (
            <div
              key={`dot_item_${dot_iddex}`}
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: "#C95C5C",
              }}
            ></div>
          ))}
        </div>
        {!_.isEmpty(activity?.stay_pro_tip_image) &&
          !_.isEmpty(activity?.stay_pro_tip) && (
            <ProTip
              city_name={activity?.city_name}
              title={activity?.stay_pro_tip}
              image={activity?.stay_pro_tip_image?.filename_disk}
            />
          )}
      </div>
    </section>
  );
};

export default StayActivitySection;
