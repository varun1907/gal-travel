import React from "react";
import ProTip from "./ProTip";
import _ from "lodash";

const ReachActivitySection = ({ activity }: any) => {
  return (
    <section className="pt-8 md:pt-12 px-4 md:px-16 gap-8 md:gap-16" id="reach">
      <div
        style={{ height: 41, backgroundColor: "#E7BFBF" }}
        className="flex items-center pl-6"
      >
        <p className="font-redHat font-bold text-base">
          How to reach {activity?.country_name}
        </p>
      </div>

      <div className="mx-1 md:mx-48">
        <p
          className="font-redHat font-medium text-base mt-7"
          dangerouslySetInnerHTML={{
            __html: activity?.reach_para || '',
          }}
        ></p>
        {!_.isEmpty(activity?.reach_pro_tip_image) &&
          !_.isEmpty(activity?.reach_pro_tip) && (
            <ProTip
              city_name={activity?.city_name}
              title={activity?.reach_pro_tip}
              image={activity?.reach_pro_tip_image?.filename_disk}
            />
          )}
      </div>
    </section>
  );
};

export default ReachActivitySection;
