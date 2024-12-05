import Image from "next/image";
import PortraitPhoto from "./components/PortraitPhoto";
import MasonryImage from "./components/MasontryImage";

const guides = [
  {
    country: "Europe",
    title: "10 Days of Swiss Bliss: A First-Timer’s Luxury Trip to Switzerland",
    image: "/latest-1.svg", // Replace with the actual path to your image
  },
  {
    country: "COUNTRY NAME",
    title: "Another blog title goes over here",
    image: "/latest-2.svg",
  },
  {
    country: "COUNTRY NAME",
    title: "Another blog title goes over here",
    image: "/latest-3.svg",
  },
];

export default function Home() {
  return (
    <div>
      <div className="carousel w-full" style={{ height: "600px" }}>
        {/* Carousel Item 1 */}
        <div id="item1" className="carousel-item w-full relative">
          <div
            className="absolute px-4 text-center"
            style={{
              left: "50%",
              top: "25%",
              transform: `translate(-50%, -50%)`,
            }}
          >
            {/* <p className="text-4xl md:text-6xl font-ragilac font-regular text-white">
              Hi, I’m Chandni,
            </p>
            <p className="text-lg md:text-3xl mt-8 font-redHat font-regular text-white">
              I’m a travel blogger, an entrepreneur, and completely in love with
              exploring the world.
            </p> */}
          </div>
          <img
            src="/carosel-1.svg"
            className="w-full object-cover h-full"
            alt="Slide 1"
          />
        </div>

        {/* Carousel Item 2 */}
        <div id="item2" className="carousel-item w-full">
          <img
            src="/carosel-2.svg"
            className="w-full object-cover h-full"
            alt="Slide 2"
          />
        </div>

        {/* Carousel Item 3 */}
        <div id="item3" className="carousel-item w-full">
          <img
            src="/carosel-2.svg"
            className="w-full object-cover h-full"
            alt="Slide 3"
          />
        </div>
      </div>

      <div className="bg-brown px-4 lg:px-20 py-8">
        <div className="lg:flex lg:justify-between lg:items-start">
          <div className="lg:w-1/2 md:mr-40 lg mr-0">
            <p className="font-redHat font-medium text-lg lg:text-xl text-center lg:text-left">
              I’m so happy you came by!
            </p>
            <p className="font-redHat text-sm lg:text-base pt-4 leading-6 text-justify lg:text-left">
              It’s so nice meeting people who share my obsession for exploring
              new places. Honestly, I’m a total sucker for discovering hidden
              gems, learning the rich histories of cities, and frequently
              raising my eyebrows and dropping my jaws at the wonders of this
              planet.
            </p>
            <p className="font-redHat text-sm lg:text-base pt-4 leading-6 text-justify lg:text-left">
              I’m just an ordinary girl with an extraordinary love for
              adventures. Even before my first international flight as an air
              hostess, I had wings on my feet, but travelling through more than{" "}
              <b>110 countries</b> has taken that love to a whole new level. For
              the past X years, I’ve followed my passion for solo luxury travel,
              high-fashion, and creating unforgettable memories. Travel is my
              therapy, my happy place—if it’s yours too, let’s hang out! You can
              find me on Instagram at{" "}
              <span className="font-redHat font-bold underline">
                @GalTravelStory.
              </span>
            </p>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <MasonryImage />
          </div>
        </div>
      </div>

      <div className="my-20 mx-6 lg:mx-24">
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
            <div className="text-center lg:text-left">
              <p className="font-redHat font-medium text-3xl">XX</p>
              <p className="font-redHat font-medium text-base">
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
            <p className="font-redHat font-medium text-3xl">XX</p>
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
            <p className="font-redHat font-medium text-3xl">XX</p>
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
            <p className="font-redHat font-medium text-3xl">XX</p>
            <p className="font-redHat font-medium text-base">
              TIMES MY LUGGAGE DIDN’T ARRIVE
            </p>
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
            <p className="font-redHat font-medium text-3xl">XX</p>
            <p className="font-redHat font-medium text-base">
              HOTELS STAYED IN
            </p>
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
            <div className="text-center lg:text-left">
              <p className="font-redHat font-medium text-3xl">XX</p>
              <p className="font-redHat font-medium text-base">
                FRIENDS I MADE ALONG THE WAY
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative my-24">
        {/* Text and Image Block */}
        <div className="flex flex-col md:flex-row items-center md:justify-between md:px-24 px-4">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="font-redHat font-medium text-xl">
              What to expect from my Travel blogs
            </p>
            <p className="font-redHat font-regular text-base mt-4">
              I’ve been travelling solo for years, building up a mile-long list
              of hidden gems, must-see destinations, and off-the-beaten-path
              experiences. My travel guides are like your BFFs—trustworthy, fun,
              and full of insider tips—so you’ll always feel like a local
              wherever you go.
            </p>
          </div>

          {/* Portrait Image */}
          <div
            className="flex justify-center mt-8 md:mt-0 flex-1"
            style={{
              zIndex: 100,
            }}
          >
            <PortraitPhoto />
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

      <div className="my-24 px-4 md:px-20">
        <p className="font-redHat font-medium text-xl mb-8">LATEST GUIDES</p>
        <div className="flex space-x-6 overflow-x-scroll scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-hidden">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="min-w-full lg:min-w-0 border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-72 md:h-48 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="card-title text-xs text-secondary-content">
                  {guide.country}
                </p>
                <div className="border-2 border-brown border-solid my-2"></div>
                <p className="font-redHat font-regular text-base">
                  {guide.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="my-24 flex justify-between md: hidden lg:flex"
        style={{ marginLeft: 100, marginRight: 100, alignItems: "center" }}
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

        <div
          className="flex justify-center"
          style={{ flex: 1, marginLeft: 200, flexWrap: "wrap" }}
        >
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
