import React from "react";
import constant from "../../config/constant";
import _ from "lodash";

const ProTip = ({ city_name, title, image }: any) => {
  return (
    <div
      className="card card-compact md:card-side bg-base-100 shadow-xl my-5"
      style={{ borderRadius: 0 }}
    >
      <figure>
        <img src={`${constant.REMOTE_IMAGE_ENDPOINT}${image}`} alt="Shoes" />
      </figure>
      <div className="flex flex-col justify-center px-5 py-5 md:py-0">
        <p
          className="font-redHat font-bold text-xs"
          style={{ color: "#C95C5C" }}
        >
          {/* Pro Tip#1@Zurich */}
          {`Pro Tip@${city_name}`}
        </p>
        <div
          className="my-1"
          style={{ height: 2, backgroundColor: "#EAD5C4" }}
        ></div>
        <p
          className="font-redHat  text-base"
          dangerouslySetInnerHTML={{
            __html: title || '',
          }}
        ></p>
      </div>
    </div>
  );
};

export default ProTip;
