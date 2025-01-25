import React from "react";
import constant from "../../config/constant";
import FunFact from "./FunFact";
import ProTip from "./ProTip";
import _ from "lodash";

const StayDaySection = ({ city_data }: any) => {
  return (
    <div className="mt-10">
      <div className="flex flex-col-reverse md:flex-row md:items-center mb-3">
        <div
          className="mt-2 md:mt-0"
          style={{ height: 2, backgroundColor: "#EAD5C4", width: 163 }}
        ></div>
        <p className="font-bold font-redHat pl-0 md:pl-6 text-xl">
          Stay@{city_data?.city_name}
        </p>
      </div>
      <div className="mx-1 md:mx-48">
        <p
          className="text-base font-redHat mb-3"
          dangerouslySetInnerHTML={{
            __html: city_data?.stay_at_intro_para || "",
          }}
        ></p>

        <div className="flex space-x-6 overflow-x-scroll scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-2 lg:overflow-hidden pb-4 mt-4">
          {[1, 2, 3].map((guide, index) => {
            const img_key_name = `stay_at_image_${guide}`;
            const caption_key_name = `stay_at_image_${guide}_caption`;
            return (
              <div
                key={index}
                className="min-w-full lg:min-w-0 border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ boxShadow: `0px 4px 10px 0px #24242440` }}
              >
                <div className="h-72 md:h-48 overflow-hidden">
                  <img
                    src={`${constant.REMOTE_IMAGE_ENDPOINT}${city_data?.[img_key_name]?.filename_disk}?updatedAt=${new Date().toISOString()}`}
                    alt={city_data?.[caption_key_name]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-1 flex justify-center">
                  <p
                    className="text-lg font-ragilac text-secondary-content "
                    style={{ color: "C95C5C" }}
                  >
                    {city_data?.[caption_key_name]}
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

        {!_.isEmpty(city_data?.stay_at_fun_fact) && (
          <FunFact title={city_data?.stay_at_fun_fact} />
        )}

        {!_.isEmpty(city_data?.stay_at_pro_tip_image) &&
          !_.isEmpty(city_data?.stay_at_pro_tip) && (
            <ProTip
              city_name={city_data?.city_name}
              title={city_data?.stay_at_pro_tip}
              image={city_data?.stay_at_pro_tip_image?.filename_disk}
            />
          )}
      </div>
    </div>
  );
};

export default StayDaySection;
