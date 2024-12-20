import { API, fireApiAction } from "@/config/api";
import Image from "next/image";
import constant from "../../config/constant";
import Conclusion from "../components/Conclusion";

async function fetchAbout() {
  const params = {
    "filter[status][_eq]": "published",
    "fields[]": "*.*.*",
  };
  try {
    const result = await fireApiAction(API.about_us, "GET", params);
    if (result?.data) {
      return result.data;
    }
    throw new Error("Not Found");
  } catch (error) {
    return null;
  }
}

export default async function About() {
  const aboutDetails = await fetchAbout();
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:items-start mx-6 md:mx-40 md:mt-10">
        <div
          className="md:w-1/2 text-center md:text-left mt-10 md:mt-0"
          style={{ alignSelf: "center" }}
        >
          <p className="text-6xl font-ragilac" style={{ color: "#C95C5C" }}>
            {aboutDetails?.title}
          </p>

          <p
            className="font-redHat font-regular text-sm"
            dangerouslySetInnerHTML={{
              __html: aboutDetails?.intro_para || "",
            }}
          ></p>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div
            className="relative w-[372px] h-[517px] border-dashed border-[#A78B88] border-[0.75px] rotate-6 overflow-hidden"
            style={{ zIndex: 30 }}
          >
            <div className="flex">
              <div
                className="bg-white p-3 shadow-md mx-auto"
                style={{ width: "352px", height: "497px", marginTop: 8 }}
              >
                <div className="relative w-[332px] h-[369px]">
                  <Image
                    src={`${constant.REMOTE_IMAGE_ENDPOINT}${aboutDetails?.intro_image?.filename_disk}`}
                    alt={"About landing"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="font-ragilac text-3xl text-center mt-4	">
                  {aboutDetails?.intro_caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative my-16 md:my-32 mx-10 md:mx-40 overflow-hidden"
        style={{ border: `4px solid #A78B88`, backgroundColor: "#FBF7F4" }}
      >
        <div className="flex flex-col-reverse md:flex-row items-center p-4 px-8 md:px-24 pt-12 md:pt-0 gap-20">
          <div
            className="flex transition-transform duration-700 ease-in-out -rotate-6 mb-32 md:mb-0"
            style={{ zIndex: 30 }}
          >
            <div
              className="flex-none"
              style={{
                width: "310px",
                height: "346px",
                flex: "0 0 auto",
              }}
            >
              <div
                className="bg-white p-2 shadow-md mx-auto"
                style={{
                  width: "290px",
                  height: "326px",
                  marginTop: 8,
                }}
              >
                <Image
                  src={`${constant.REMOTE_IMAGE_ENDPOINT}${aboutDetails?.quote_image?.filename_disk}`}
                  alt={"dummy"}
                  width={270}
                  height={306}
                />
              </div>
            </div>
          </div>
          <div>
            <p
              className="font-redHat font-medium text-3xl"
              style={{ color: "#A78B88" }}
            >
              {aboutDetails?.quote}
            </p>
          </div>
        </div>
        <div className="absolute bottom-28 md:-top-4 -left-10 md:left-0 ">
          <img src="/ballon.svg" />
        </div>

        <div className="absolute bottom-0 -left-10  md:left-0">
          <img src="/leaf_left.svg" />
        </div>

        <div className="absolute bottom-40 md:top-0 -right-10 md:right-0">
          <img src="/leaf_right.svg" />
        </div>
        <div className="absolute bottom-0 right-24 md:right-36">
          <img src="/map_graphic.svg" />
        </div>

        <div className="absolute bottom-0 -right-10 md:right-0">
          <img src="/city_name_board.svg" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-6 md:mx-40 items-center my-16">
        <div className="flex flex-1">
          <p
            className="font-redHat font-regular text-base"
            dangerouslySetInnerHTML={{
              __html: aboutDetails?.experience_content || "",
            }}
          ></p>
        </div>

        <div className="relative flex flex-1 md:flex-wrap items-center justify-center px-6 md:px-12 my-10 md:my-0">
          <div className="flex flex-row gap-2" style={{ zIndex: 2 }}>
            <div className=" flex flex-col items-center">
              <div className="overflow-hidden w-[150px] md:w-[200px] h-[143px] md:h-[161px]">
                <img
                  src={`${constant.REMOTE_IMAGE_ENDPOINT}${aboutDetails?.experience_image_1?.filename_disk}`}
                  alt={aboutDetails?.experience_image_1_caption}
                  className="w-full h-[161px] object-cover"
                />
              </div>
              {/* Text Below Each Image */}
              <div
                style={{
                  height: 40,
                  backgroundColor: "#FFFFFF",
                  width: "100%",
                }}
              >
                <p
                  className="font-ragilac mt-2  text-center text-gray-600"
                  style={{ color: "#C95C5C", fontSize: 18 }}
                >
                  {aboutDetails?.experience_image_1_caption}
                </p>
              </div>
            </div>

            <div className="shadow-md flex flex-col items-center">
              <div className="overflow-hidden w-[150px] md:w-[200px] h-[225px] md:h-[300px]">
                <img
                  src={`${constant.REMOTE_IMAGE_ENDPOINT}${aboutDetails?.experience_image_2?.filename_disk}`}
                  alt={aboutDetails?.experience_image_2_caption}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Below Each Image */}
              <div
                style={{
                  height: 40,
                  backgroundColor: "#FFFFFF",
                  width: "100%",
                }}
              >
                <p
                  className="font-ragilac mt-2  text-center text-gray-600"
                  style={{ color: "#C95C5C", fontSize: 18 }}
                >
                  {aboutDetails?.experience_image_2_caption}
                </p>
              </div>
            </div>
          </div>

          <div
            className="shadow-md flex flex-col items-center absolute left-10 md:left-44 top-48 md:top-32 "
            style={{ zIndex: 1 }}
          >
            <div className="overflow-hidden w-[150px] md:w-[200px] h-[143px] md:h-[270px] ">
              <img
                src={`${constant.REMOTE_IMAGE_ENDPOINT}${aboutDetails?.experience_image_3?.filename_disk}`}
                alt={aboutDetails?.experience_image_3_caption}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              style={{
                height: 40,
                backgroundColor: "#FFFFFF",
                width: "100%",
              }}
            >
              <p
                className="font-ragilac mt-2  text-center text-gray-600"
                style={{ color: "#C95C5C", fontSize: 18 }}
              >
                {aboutDetails?.experience_image_3_caption}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel w-full mt-20" style={{ height: "400px" }}>
        <div id="item1" className="carousel-item w-full relative">
          <div
            className="absolute px-4 text-center"
            style={{
              left: "50%",
              top: "40%", // Adjusted top percentage for better placement
              transform: `translate(-50%, -50%)`,
            }}
          >
            <p className="text-4xl font-ragilac font-regular">
              {aboutDetails?.banner_title}
            </p>

            <button
              className="mt-6 px-6 py-2 text-sm md:text-base text-white shadow-lg hover:bg-orange-500"
              style={{ borderRadius: 6, backgroundColor: "#BD6D6D" }}
            >
              {aboutDetails?.banner_cta_button_text}
            </button>
          </div>
          <img
            src={`${constant.REMOTE_IMAGE_ENDPOINT}${aboutDetails?.banner_image?.filename_disk}`}
            className="w-full object-cover h-full"
            alt="Slide 1"
          />
        </div>
      </div>
      <div className="mt-16">
        <Conclusion
          show_btn={true}
          btn_text={aboutDetails?.conclusion_cta_button_text}
          // on_btn_click={() => {}}
          heading={aboutDetails?.conclusion_heading}
          content={aboutDetails?.conclusion_content}
          image={aboutDetails?.conclusion_image?.filename_disk}
        />
      </div>
    </div>
  );
}
