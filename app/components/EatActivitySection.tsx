import React from "react";
import constant from "../../config/constant";
import ProTip from "./ProTip";
import _ from "lodash";

const EatActivitySection = ({ activity }: any) => {
  return (
    <section className="pt-8 md:pt-12 gap-8 md:gap-16" id="eat">
      <div
        style={{ height: 41, backgroundColor: "#E7BFBF" }}
        className="flex items-center pl-6"
      >
        <p className="font-redHat font-bold text-base">Where to Eat</p>
      </div>

      <div className="mx-4 md:mx-48">
        <div className="py-8 md:py-12 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p
              className="font-redHat text-base"
              dangerouslySetInnerHTML={{
                __html: activity?.eat_para || "",
              }}
            ></p>
          </div>

          <div className="flex flex-wrap gap-8 md:flex-col">
            <div className="w-full flex items-center justify-center">
              <img
                className="w-[220px] md:w-[220px] h-[200px] md:h-[154px] object-cover"
                src={`${constant.REMOTE_IMAGE_ENDPOINT}${activity?.eat_image_1?.filename_disk}?updatedAt=${new Date().toISOString()}`}
                alt="Image 1"
                // style={{ width: 164, height: 154 }}
              />
            </div>

            <div className="w-full flex items-center justify-center">
              <img
                // className="w-full h-auto object-cover"
                className="w-[220px] md:w-[220px] h-[200px] md:h-[154px] object-cover"
                src={`${constant.REMOTE_IMAGE_ENDPOINT}${activity?.eat_image_1?.filename_disk}?updatedAt=${new Date().toISOString()}`}
                alt="Image 2"
                // style={{ width: 164, height: 154 }}
              />
            </div>

            <div className="w-full flex items-center justify-center">
              <img
                // className="w-full h-auto object-cover"
                className="w-[220px] md:w-[220px] h-[200px] md:h-[154px] object-cover"
                src={`${constant.REMOTE_IMAGE_ENDPOINT}${activity?.eat_image_1?.filename_disk}?updatedAt=${new Date().toISOString()}`}
                alt="Image 3"
                // style={{ width: 164, height: 154 }}
              />
            </div>
          </div>
        </div>
        {!_.isEmpty(activity?.eat_pro_tip_image) &&
          !_.isEmpty(activity?.eat_pro_tip) && (
            <ProTip
              city_name={activity?.city_name}
              title={activity?.eat_pro_tip}
              image={activity?.eat_pro_tip_image?.filename_disk}
            />
          )}
      </div>
    </section>
  );
};

export default EatActivitySection;
