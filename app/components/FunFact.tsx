import Image from "next/image";
import React from "react";

const FunFact = () => {
  return (
    <div
      className="flex my-5 items-center p-4"
      style={{ border: `4px solid #E5B791`, backgroundColor: "#FBF7F4" }}
    >
      <Image
        aria-hidden
        className="mr-6"
        src="/fun_fact.svg"
        alt="Funfact Icon"
        width={30}
        height={35.11}
      />
      <div>
        <p
          className="font-redHat font-bold text-xs"
          style={{ color: "#E5B791" }}
        >
          FUN FACT
        </p>
        <p className="font-redHat font-medium text-base mt-1">
          The summit station on the Gornergrat has Europe’s highest-altitude
          hotel: the 3100 Kulmhotel Gornergrat. Have an Insta-worthy stay here
          for about 360 Swiss Francs a night.The summit station on the
          Gornergrat has Europe’s highest-altitude hotel: the 3100 Kulmhotel
          Gornergrat. Have an Insta-worthy stay here for about 360 Swiss Francs
          a night. The summit station on the Gornergrat has Europe’s
          highest-altitude hotel: the 3100 Kulmhotel Gornergrat. Have an
          Insta-worthy stay here for about 360 Swiss Francs a night. The summit
          station on the Gornergrat has Europe’s highest-altitude hotel: the
          3100 Kulmhotel Gornergrat. Have an Insta-worthy stay here for about
          360 Swiss Francs a night.
        </p>
      </div>
    </div>
  );
};

export default FunFact;
