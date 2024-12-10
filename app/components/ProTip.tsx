import React from "react";

const ProTip = () => {
  return (
    <div className="card card-compact md:card-side bg-base-100 shadow-xl my-5">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="flex flex-col justify-center px-5 py-5 md:py-0">
        <p
          className="font-redHat font-bold text-xs"
          style={{ color: "#C95C5C" }}
        >
          Pro Tip#1@Zurich
        </p>
        <div
          className="my-1"
          style={{ height: 2, backgroundColor: "#EAD5C4" }}
        ></div>
        <p className="font-redHat  text-base">
          I cannot stress this enough - Buy a Swiss Pass—it's like a VIP pass to
          explore the country in the most cost-effective yet luxurious way. The
          pass works on all kinds of transport - trains, buses, boats, and even
          discounts on mountain rides. You also get free access to museums and
          discounts on many tourist attractions. 
        </p>
      </div>
    </div>
  );
};

export default ProTip;
