import React from "react";
import constant from "../../config/constant";
import _ from "lodash";
import Image from "next/image";

const ProTip = ({ city_name, title, image }: any) => {
  return (
    <div
      className="card card-compact md:card-side bg-base-100 shadow-xl my-5"
      style={{ borderRadius: 0 }}
    >
      <div className="relative w-[350px] h-[200px] object-cover ">
        <Image
          src={`${constant.REMOTE_IMAGE_ENDPOINT}${image}`}
          alt="Pro Tip"
          layout={"fill"}
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col justify-center px-5 py-5 md:py-5">
        <p
          className="font-redHat font-bold text-xs"
          style={{ color: "#C95C5C" }}
        >
          {`Pro Tip@${city_name ? city_name : ""}`}
        </p>
        <div
          className="my-1"
          style={{ height: 2, backgroundColor: "#EAD5C4" }}
        ></div>
        <p
          className="font-redHat  text-base"
          dangerouslySetInnerHTML={{
            __html: title || "",
          }}
        ></p>
      </div>
    </div>
  );
};

export default ProTip;
