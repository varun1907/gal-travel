import React from "react";
import FunFact from "./FunFact";
import ProTip from "./ProTip";
import constant from "../../config/constant";
import _ from "lodash";

const DoyDaySection = ({ city_data }: any) => {
  return (
    <div className="mt-10">
      <div className="flex flex-col-reverse md:flex-row md:items-center mb-3">
        <div
          className="mt-2 md:mt-0"
          style={{ height: 2, backgroundColor: "#EAD5C4", width: 163 }}
        ></div>
        <p className="font-bold font-redHat pl-0 md:pl-6 text-xl">
          Do@{city_data?.city_name}
        </p>
      </div>
      <div className="mx-1 md:mx-48">
        <p
          className="text-base font-redHat mb-3"
          dangerouslySetInnerHTML={{
            __html: city_data?.do_at_intro_para_copy,
          }}
        ></p>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
          <div
            className="md:col-span-1 border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{ boxShadow: `0px 4px 10px 0px #24242440` }}
          >
            <img
              src={`${constant.REMOTE_IMAGE_ENDPOINT}${city_data?.do_at_image_1?.filename_disk}`}
              alt="Image 1"
              className="w-full h-[200px] md:h-[410px] object-cover"
            />
            <div className="p-1 flex justify-center">
              <p
                className="text-lg font-ragilac text-secondary-content"
                style={{ color: "C95C5C" }}
              >
                {city_data?.do_at_image_1_caption}
              </p>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div
              className="border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ boxShadow: `0px 4px 10px 0px #24242440` }}
            >
              <img
                src={`${constant.REMOTE_IMAGE_ENDPOINT}${city_data?.do_at_image_2?.filename_disk}`}
                alt="Image 2"
                className="w-full h-[200px] md:h-[180px] object-cover"
              />
              <div className="p-1 flex justify-center">
                <p
                  className="text-lg font-ragilac text-secondary-content"
                  style={{ color: "C95C5C" }}
                >
                  {city_data?.do_at_image_2_caption}
                </p>
              </div>
            </div>
            <div
              className="border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ boxShadow: `0px 4px 10px 0px #24242440` }}
            >
              <img
                src={`${constant.REMOTE_IMAGE_ENDPOINT}${city_data?.do_at_image_3?.filename_disk}`}
                alt="Image 3"
                className="w-full h-[200px] md:h-[180px] object-cover"
              />
              <div className="p-1 flex justify-center">
                <p
                  className="text-lg font-ragilac text-secondary-content"
                  style={{ color: "C95C5C" }}
                >
                  {city_data?.do_at_image_3_caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {!_.isEmpty(city_data?.do_at_fun_fact) && (
          <FunFact title={city_data?.do_at_fun_fact} />
        )}

        {!_.isEmpty(city_data?.do_at_pro_tip_image) &&
          !_.isEmpty(city_data?.do_at_pro_tip) && (
            <ProTip
              city_name={city_data?.city_name}
              title={city_data?.do_at_pro_tip}
              image={city_data?.do_at_pro_tip_image?.filename_disk}
            />
          )}
      </div>
    </div>
  );
};

export default DoyDaySection;
