import React from "react";
import ProTip from "./ProTip";
import constant from "../../config/constant";
import _ from "lodash";
import Image from "next/image";

const VisitActivitySection = ({ activity }: any) => {
  return (
    <section className="pt-8 md:pt-12 gap-8 md:gap-16" id="visit">
      <div
        style={{ height: 41, backgroundColor: "#E7BFBF" }}
        className="flex items-center pl-6"
      >
        <p className="font-redHat font-bold text-base">
          The Best Time To Visit
        </p>
      </div>

      <div className="mx-4 md:mx-48">
        <p
          className="text-base font-redHat font-regular mt-7 rich_text_links"
          dangerouslySetInnerHTML={{
            __html: activity?.visit_para || "",
          }}
        ></p>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mt-4">
          <div
            className="border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative w-full h-[200px] md:h-[420px] object-cover"
            style={{ boxShadow: `0px 4px 10px 0px #24242440` }}
          >
            <Image
              src={`${constant.REMOTE_IMAGE_ENDPOINT}${activity?.visit_image_1_big?.filename_disk}`}
              alt={"Visit Image 1"}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div
              className="border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative w-full h-[200px] md:h-[200px] object-cover"
              style={{ boxShadow: `0px 4px 10px 0px #24242440` }}
            >
              <Image
                src={`${constant.REMOTE_IMAGE_ENDPOINT}${activity?.visit_image_2?.filename_disk}`}
                alt={"Visit Image 2"}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className="border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative w-full h-[200px] md:h-[200px] object-cover"
              style={{ boxShadow: `0px 4px 10px 0px #24242440` }}
            >
              <Image
                src={`${constant.REMOTE_IMAGE_ENDPOINT}${activity?.visit_image_3?.filename_disk}`}
                alt={"Visit Image 3"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        {!_.isEmpty(activity?.visit_pro_tip_image) &&
          !_.isEmpty(activity?.visit_pro_tip) && (
            <ProTip
              city_name={activity?.city_name}
              title={activity?.visit_pro_tip}
              image={activity?.visit_pro_tip_image?.filename_disk}
            />
          )}
      </div>
    </section>
  );
};

export default VisitActivitySection;
