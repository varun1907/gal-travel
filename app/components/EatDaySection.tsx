import React from "react";
import FunFact from "./FunFact";
import ProTip from "./ProTip";
import constant from "../../config/constant";
import _ from "lodash";
import Image from "next/image";

const EatDaySection = ({ city_data }: any) => {
  return (
    <div className="mt-10">
      <div className="flex flex-col-reverse md:flex-row md:items-center mb-3">
        <div
          className="mt-2 md:mt-0"
          style={{ height: 2, backgroundColor: "#EAD5C4", width: 163 }}
        ></div>
        <p className="font-bold font-redHat pl-0 md:pl-6 text-xl">
          Eat@{city_data?.city_name}
        </p>
      </div>
      <div className="mx-1 md:mx-48">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p
              className="font-redHat text-base rich_text_links"
              dangerouslySetInnerHTML={{
                __html: city_data?.eat_at_intro_para || "",
              }}
            ></p>
          </div>

          <div className="flex flex-wrap gap-4 md:flex-col">
            <div className="w-full flex items-center justify-center relative w-[220px] md:w-[220px] h-[200px] md:h-[154px] object-cover">
              <Image
                src={`${constant.REMOTE_IMAGE_ENDPOINT}${city_data?.eat_image_1?.filename_disk}`}
                alt="Image 1"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {!_.isEmpty(city_data?.eat_image_2?.filename_disk) && (
              <div className="w-full flex items-center justify-center relative w-[220px] md:w-[220px] h-[200px] md:h-[154px] object-cover">
                <Image
                  src={`${constant.REMOTE_IMAGE_ENDPOINT}${city_data?.eat_image_2?.filename_disk}`}
                  alt="Image 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            {!_.isEmpty(city_data?.eat_image_3?.filename_disk) && (
              <div className="w-full flex items-center justify-center relative w-[220px] md:w-[220px] h-[200px] md:h-[154px] object-cover">
                <Image
                  src={`${constant.REMOTE_IMAGE_ENDPOINT}${city_data?.eat_image_3?.filename_disk}`}
                  alt="Image 3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
          </div>
        </div>
        {!_.isEmpty(city_data?.eat_at_fun_fact) && (
          <FunFact title={city_data?.eat_at_fun_fact} />
        )}

        {!_.isEmpty(city_data?.eat_at_pro_tip_image) &&
          !_.isEmpty(city_data?.eat_at_pro_tip) && (
            <ProTip
              city_name={city_data?.city_name}
              title={city_data?.eat_at_pro_tip}
              image={city_data?.eat_at_pro_tip_image?.filename_disk}
            />
          )}
      </div>
    </div>
  );
};

export default EatDaySection;
