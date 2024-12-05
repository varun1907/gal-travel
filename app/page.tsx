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
      <div className="carousel w-full" style={{ height: 600 }}>
        <div id="item1" className="carousel-item w-full relative">
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "25%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            <p className="text-6xl text-center font-ragilac font-regular text-white">
              Hi, I’m Chandni,
            </p>
            <p className="text-3xl text-center mt-8 font-redHat font-regular text-white">
              I’m a travel blogger, an entrepreneur, and completely in love with
              exploring the world.
            </p>
          </div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
        </div>
      </div>
      {/* <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div> */}

      <div
        className="bg-brown flex mt-20"
        style={{ marginLeft: 100, marginRight: 100, padding: 30 }}
      >
        <div style={{ flex: 0.4 }}>
          <p className="font-redHat font-medium text-base ">
            I’m so happy you came by!
          </p>
          <p className="font-redHat font-regular text-base pt-5">
            It’s so nice meeting people who share my obsession for exploring new
            places. Honestly, I’m a total sucker for discovering hidden gems,
            learning the rich histories of cities, and frequently raising my
            eyebrows and dropping my jaws at the wonders of this planet.
          </p>
          <p className="font-redHat font-regular text-base pt-5">
            I’m just an ordinary girl with an extraordinary love for adventures.
            Even before my first international flight as an air hostess, I had
            wings on my feet, but travelling through more than 110 countries has
            taken that love to a whole new level. For the past X years, I’ve
            followed my passion for solo luxury travel, high-fashion, and
            creating unforgettable memories. Travel is my therapy, my happy
            place—if it’s yours too, let’s hang out! You can find me on
            Instagram at{" "}
            <span className="font-redHat font-bold underline">
              @GalTravelStory.
            </span>
          </p>
          <p></p>
        </div>
        <div style={{ flex: 0.2 }}></div>
        <div style={{ flex: 0.4 }}>
          <MasonryImage />
        </div>
      </div>

      <div className="my-20" style={{ marginLeft: 100, marginRight: 100 }}>
        <div className="flex flex-1 gap-4">
          <div
            className="flex border-dark_brown border-solid items-center justify-between px-20"
            style={{ borderWidth: 4, flex: 0.5, height: 250 }}
          >
            <Image
              aria-hidden
              className="mb-3"
              src="/world.svg"
              alt="Footer line"
              width={287}
              height={188}
            />
            <div className="ml-8 flex items-center justify-center flex-col">
              <p className="font-redHat font-medium text-3xl">XX</p>
              <p className="font-redHat font-medium text-base">
                COUNTRIES TRAVELLED
              </p>
            </div>
          </div>

          <div
            className="flex flex-col border-dark_brown border-solid items-center justify-center flex-col"
            style={{ borderWidth: 4, flex: 0.25, height: 250 }}
          >
            <Image
              aria-hidden
              className="mb-3"
              src="/airplane.svg"
              alt="Footer line"
              width={63}
              height={56}
            />
            <div className="flex items-center justify-center flex-col">
              <p className="font-redHat font-medium text-3xl">XX</p>
              <p className="font-redHat font-medium text-base">
                FLIGHTS ALMOST MISSED
              </p>
            </div>
          </div>

          <div
            className="flex flex-col border-dark_brown border-solid items-center justify-center flex-col"
            style={{ borderWidth: 4, flex: 0.25, height: 250 }}
          >
            <Image
              aria-hidden
              className="mb-3"
              src="/lost.svg"
              alt="Footer line"
              width={126}
              height={81}
            />
            <div className="flex items-center justify-center flex-col">
              <p className="font-redHat font-medium text-3xl">XX</p>
              <p className="font-redHat font-medium text-base">
                TIMES I GOT LOST
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 gap-4 mt-4">
          <div
            className="flex flex-col border-dark_brown border-solid items-center justify-center flex-col"
            style={{ borderWidth: 4, flex: 0.25, height: 250 }}
          >
            <Image
              aria-hidden
              className="mb-3"
              src="/bags.svg"
              alt="Footer line"
              width={68}
              height={88}
            />
            <div className="flex items-center justify-center flex-col">
              <p className="font-redHat font-medium text-3xl">XX</p>
              <p className="font-redHat font-medium text-base">
                TIMES MY LUGGAGE DIDN’T Arrive
              </p>
            </div>
          </div>

          <div
            className="flex flex-col border-dark_brown border-solid items-center justify-center flex-col"
            style={{ borderWidth: 4, flex: 0.25, height: 250 }}
          >
            <Image
              aria-hidden
              className="mb-3"
              src="/building.svg"
              alt="Footer line"
              width={94}
              height={102}
            />
            <div className="flex items-center justify-center flex-col">
              <p className="font-redHat font-medium text-3xl">XX</p>
              <p className="font-redHat font-medium text-base">
                HOTELS STAYED IN
              </p>
            </div>
          </div>

          <div
            className="flex border-dark_brown border-solid items-center justify-between px-20"
            style={{ borderWidth: 4, flex: 0.5, height: 250 }}
          >
            <Image
              aria-hidden
              className="mb-3"
              src="/friends.svg"
              alt="Footer line"
              width={213}
              height={236}
            />
            <div className="ml-8 flex items-center justify-center flex-col">
              <p className="font-redHat font-medium text-3xl">XX</p>
              <p className="font-redHat font-medium text-base">
                FRIENDS I MADE ALONG THE WAY
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative my-24"
        style={
          {
            // marginLeft: 100, marginRight: 100
          }
        }
      >
        {/* Text and Image Block */}
        <div
          className="flex justify-between"
          style={{
            paddingLeft: 100,
            paddingRight: 100,
          }}
        >
          <div style={{ flex: 1 }}>
            <p className="font-redHat font-medium text-xl">
              What to expect from my Travel blogs
            </p>
            <p className="font-redHat font-regular text-base mt-6">
              I’ve been travelling solo for years, building up a mile long list
              of hidden gems, must-see destinations, and off-the-beaten-path
              experiences. My travel guides are like your BFFs—trustworthy, fun,
              and full of insider tips—so you’ll always feel like a local
              wherever you go.
            </p>
          </div>

          <div
            className="flex justify-center"
            style={{ flex: 1, marginLeft: 200, zIndex: 100 }}
          >
            <PortraitPhoto />
          </div>
        </div>

        {/* Plane with Dotted Line */}
        <img
          src="/dotted_plane.svg"
          alt="Plane with dotted line"
          className="absolute"
          style={{
            top: "90%", // Adjust based on the position you want
            left: "0%", // Adjust to align properly
            transform: "translateY(-50%)", // Center the image if needed
            width: "100%", // Adjust width as per design
          }}
        />
      </div>

      <div className="my-24" style={{ marginLeft: 100, marginRight: 100 }}>
        <p className="font-redHat font-medium text-xl">LATEST GUIDES</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
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
        className="my-24 flex justify-between"
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
