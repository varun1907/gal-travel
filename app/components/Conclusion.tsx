import Image from "next/image";
import React from "react";

const Conclusion = () => {
  return (
    <div className="mx-5 md:mx-28 flex flex-col">
      <div
        className="flex flex-col md:flex-row pl-10 py-8 pr-8 gap-10"
        style={{ backgroundColor: "#EAD5C4" }}
      >
        <div className="flex-1">
          <Image
            aria-hidden
            className="mr-6"
            src="/conclusion.svg"
            alt="conclusion Icon"
            width={30}
            height={35.11}
          />
          <p className="font-redHat font-medium text-base mt-6">
            Switzerland may be known for its high prices, but with these
            curatedexperiences and insider tips..
          </p>
          <p className="font-redHat text-base mt-3">
            ..you can enjoy its luxury without breaking the bank. Whether youre
            bungee jumping over Interlaken, paragliding in Lauterbrunnen, or
            sipping hot chocolate while admiring the Matterhorn, Switzerland
            offers adventures rich in beauty and luxury. From scenic train rides
            and affordable fine dining to action-packed activities, theres a
            luxury experience waiting just for you. So pack your woollens and
            get ready to indulge your wanderlust for Switzerland in style.
          </p>
        </div>

        <div className="flex-1">
          <div
            style={{
              boxShadow: `0px 4px 4px 0px #24242440`,
            }}
          >
            <div
              style={{ backgroundColor: "#FFFFFF", paddingTop: 0 }}
              className="p-1"
            >
              <Image
                aria-hidden
                src="/dummy_full.svg"
                alt="Footer line"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        aria-hidden
        className="my-10 self-center"
        src="/line_separator.svg"
        alt="Line Separator"
        // layout="responsive"
        width={600}
        height={20}
      />
    </div>
  );
};

export default Conclusion;
