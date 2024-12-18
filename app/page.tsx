import Image from "next/image";
import PortraitPhoto from "./components/PortraitPhoto";
import MasonryImage from "./components/MasontryImage";
import { API, fireApiAction } from "@/config/api";
import _ from "lodash";
import constant from "../config/constant";
import LatestGuides from "./components/LatestGuides";

async function fetchHomeDetails() {
  const params = {
    "filter[status][_eq]": "published",
    "fields[]": "*.*.*.*",
  };

  try {
    const result = await fireApiAction(API.home_page, "GET", params);
    if (result?.data) {
      return result.data;
    }
    throw new Error("Not Found");
  } catch (error) {
    return null;
  }
}

async function fetchLatestGuides() {
  const params = {
    "fields[]":
      "id,slug,country,blog_listing_preview_image.*,blog_listing_cta_text,blog_listing_preview_text",
    "sort[]": "-date_created",
  };

  try {
    const result = await fireApiAction(API.travel_blogs, "GET", params);
    if (result?.data && result?.data?.length > 0) {
      const arr = _.cloneDeep(result.data);
      arr.splice(3);
      return arr;
    }
    throw new Error("Not Found");
  } catch (error) {
    return null;
  }
}

export default async function Home() {
  const homeDetails = await fetchHomeDetails();
  const latestGuides = await fetchLatestGuides();

  return (
    <div>
      <div className="carousel w-full" style={{ height: "600px" }}>
        {_.map(homeDetails?.hero_banner_assets, (banner_item, banner_index) => (
          <div
            className="carousel-item w-full relative"
            key={`home_banner_${banner_index}`}
          >
            <div
              className="absolute px-4 text-center text-white"
              style={{
                left: "50%",
                top: "30%", // Adjusted top percentage for better placement
                transform: `translate(-50%, -50%)`,
              }}
            >
              <p className="text-4xl md:text-6xl font-ragilac font-regular leading-tight">
                {banner_item?.hero_banner_assets_id?.hero_banner_title}
              </p>
              <p className="text-lg md:text-3xl mt-8 font-redHat font-regular">
                {banner_item?.hero_banner_assets_id?.hero_banner_subtitle}
              </p>
              <button
                className="mt-6 px-6 py-2 text-sm md:text-base text-white shadow-lg hover:bg-orange-500"
                style={{ borderRadius: 6, backgroundColor: "#E5B791" }}
              >
                {banner_item?.hero_banner_assets_id?.hero_banner_cta_text}
              </button>
            </div>
            <img
              src={`${constant.REMOTE_IMAGE_ENDPOINT}${banner_item?.hero_banner_assets_id?.hero_banner_image?.filename_disk}`}
              className="w-full object-cover h-full"
              alt="Slide 1"
            />
          </div>
        ))}
      </div>

      <div className="bg-brown px-4 lg:px-20 py-8 mx-6 lg:mx-32 my-10 md:my-20">
        <div className="lg:flex lg:justify-between lg:items-start">
          <div
            className="lg:w-1/2 md:mr-40 lg mr-0"
            style={{ alignSelf: "center" }}
          >
            <p className="font-redHat font-medium text-lg lg:text-xl text-center lg:text-left">
              {homeDetails?.intro_title}
            </p>
            <p
              className="font-redHat text-sm lg:text-base pt-4 leading-6 text-justify lg:text-left"
              dangerouslySetInnerHTML={{
                __html: homeDetails?.intro_para || "",
              }}
            ></p>
          </div>

          <div className="lg:w-1/2 lg:mt-0">
            <MasonryImage homeDetails={homeDetails} />
          </div>
        </div>
      </div>

      <div className="my-10 md:my-20 mx-6 lg:mx-32">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Countries Travelled */}
          <div className="flex flex-col lg:flex-row items-center border-dark_brown border-solid justify-between px-6 py-4 lg:px-20 border-4 flex-1 lg:flex-[0.5] h-auto lg:h-64">
            <Image
              aria-hidden
              className="mb-3 lg:mb-0"
              src="/world.svg"
              alt="World Map"
              width={287}
              height={188}
            />
            <div className="flex flex-col text-center lg:text-left items-center">
              <p className="font-redHat font-medium text-3xl">
                {homeDetails?.countries_travelled}
              </p>
              <p className="font-redHat font-medium text-base text-center">
                COUNTRIES TRAVELLED
              </p>
            </div>
          </div>

          {/* Flights Almost Missed */}
          <div className="flex flex-col items-center border-dark_brown border-solid justify-center py-4 border-4 flex-1 lg:flex-[0.25] h-auto lg:h-64">
            <Image
              aria-hidden
              className="mb-3"
              src="/airplane.svg"
              alt="Airplane Icon"
              width={63}
              height={56}
            />
            <p className="font-redHat font-medium text-3xl">
              {homeDetails?.flights_almost_missed}
            </p>
            <p className="font-redHat font-medium text-base">
              FLIGHTS ALMOST MISSED
            </p>
          </div>

          {/* Times I Got Lost */}
          <div className="flex flex-col items-center border-dark_brown border-solid justify-center py-4 border-4 flex-1 lg:flex-[0.25] h-auto lg:h-64">
            <Image
              aria-hidden
              className="mb-3"
              src="/lost.svg"
              alt="Lost Icon"
              width={126}
              height={81}
            />
            <p className="font-redHat font-medium text-3xl">
              {homeDetails?.times_i_got_lost}
            </p>
            <p className="font-redHat font-medium text-base">
              TIMES I GOT LOST
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          {/* Times My Luggage Didn’t Arrive */}
          <div className="flex flex-col items-center border-dark_brown border-solid justify-center py-4 border-4 flex-1 lg:flex-[0.25] h-auto lg:h-64">
            <Image
              aria-hidden
              className="mb-3"
              src="/bags.svg"
              alt="Bags Icon"
              width={68}
              height={88}
            />
            <div className="flex flex-col text-center lg:text-left items-center">
              <p className="font-redHat font-medium text-3xl">
                {homeDetails?.times_my_luggage_did_not_arrive}
              </p>
              <p className="font-redHat font-medium text-base text-center">
                TIMES MY LUGGAGE DIDN’T ARRIVE
              </p>
            </div>
          </div>

          {/* Hotels Stayed In */}
          <div className="flex flex-col items-center border-dark_brown border-solid justify-center py-4 border-4 flex-1 lg:flex-[0.25] h-auto lg:h-64">
            <Image
              aria-hidden
              className="mb-3"
              src="/building.svg"
              alt="Building Icon"
              width={94}
              height={102}
            />
            <div className="flex flex-col text-center lg:text-left items-center">
              <p className="font-redHat font-medium text-3xl">
                {homeDetails?.hotels_stayed_in}
              </p>
              <p className="font-redHat font-medium text-base">
                HOTELS STAYED IN
              </p>
            </div>
          </div>

          {/* Friends Made Along the Way */}
          <div className="flex flex-col lg:flex-row items-center border-dark_brown border-solid justify-between px-6 py-4 lg:px-20 border-4 flex-1 lg:flex-[0.5] h-auto lg:h-64">
            <Image
              aria-hidden
              className="mb-3 lg:mb-0"
              src="/friends.svg"
              alt="Friends Icon"
              width={213}
              height={236}
            />
            <div className="flex flex-col text-center lg:text-left items-center">
              <p className="font-redHat font-medium text-3xl">
                {homeDetails?.friends_i_made_along_the_way}
              </p>
              <p className="font-redHat font-medium text-base">
                FRIENDS I MADE ALONG THE WAY
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative my-10 md:my-24">
        {/* Text and Image Block */}
        <div className="flex flex-col md:flex-row items-center md:justify-between md:px-32 px-4">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="font-redHat font-medium text-xl">
              {homeDetails?.what_to_expect_title}
            </p>
            <p
              className="font-redHat font-regular text-base mt-4"
              dangerouslySetInnerHTML={{
                __html: homeDetails?.what_to_expect_content || "",
              }}
            ></p>
          </div>

          {/* Portrait Image */}
          <div
            className="flex justify-center mt-8 md:mt-0 flex-1"
            style={{
              zIndex: 100,
            }}
          >
            <PortraitPhoto homeDetails={homeDetails} />
          </div>
        </div>

        {/* Plane with Dotted Line */}
        <img
          src="/dotted_plane.svg"
          alt="Plane with dotted line"
          // className="absolute w-full top-[50%] md:top-[90%] left-0 transform -translate-y-1/2"
          className="absolute w-full bottom[0%] md:top-[90%] left-0 transform -translate-y-1/2"
        />
      </div>

      <div className="my-24 mb-10 md:mb-24 px-4 md:px-32">
        <p className="font-redHat font-medium text-xl mb-8">LATEST GUIDES</p>
        <div className="flex space-x-6 overflow-x-scroll scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-hidden">
          {_.map(latestGuides, (latest_item, latest_index) => (
            <LatestGuides
              key={`latest_item_${latest_index}`}
              latest_item={latest_item}
            />
          ))}
        </div>
      </div>

      <div
        className="my-24 flex justify-between md: hidden lg:flex px-4 md:px-32"
        style={{ alignItems: "center" }}
      >
        <div style={{ flex: 1 }}>
          <p className="font-redHat font-medium text-xl">
            Follow me on @galtravelstory
          </p>
          <p className="font-redHat font-regular text-base mt-6">
            to get a backstage pass to inspiration, wanderlust, and the kind of
            moments that make you wish you were right there with me, falling in
            love with a new place every day.
          </p>
        </div>

        <div className="flex justify-end" style={{ flex: 1, flexWrap: "wrap" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div
              key={`img_${item}`}
              style={{
                width: 100,
                height: 100,
                marginBottom: index < 4 ? 20 : 0,
                flexBasis: "21%",
              }}
            >
              <Image
                aria-hidden
                className="mb-3"
                src="/dummy_full.svg"
                alt="Footer line"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
