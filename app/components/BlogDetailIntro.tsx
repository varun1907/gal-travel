import Image from "next/image";
import React from "react";

const BlogDetailIntro = () => {
  return (
    <section className="md:py-12 px-4 md:px-16 flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-4 md:px-16 py-8 md:py-12">
        <div className="flex-1 h-64 p-5 md:h-auto">
          <p className="font-redHat text-lg font-medium">
            Ah, the South of France, a place where the sun kisses your skin just
            right, and romance lingers in the air. It is a geographical area
            consisting of the regions of France that border the Atlantic Ocean
            south of the Marais Poitevin, Spain, the Mediterranean Sea and
            Italy.
          </p>

          <Image
            aria-hidden
            className="mb-3 mt-3"
            src="/line_separator.svg"
            alt="Line Separator"
            layout="responsive"
            width={100}
            height={50}
          />
          <p className="font-redHat text-base">
            The largest city in France, Paris is also known as La Ville
            Lumière—The City of Light. It is a major railway, highway, and
            air-transport hub served by two international airports Charles de
            Gaulle Airport, the third-busiest airport in Europe, and Orly
            Airport. The Paris Métro serves 5.23 million passengers daily and is
            the 2nd busiest metro system in Europe after the Moscow Metro. You
            wont find any skyscrapers in central Paris as they want to preserve
            its historic French architecture and keep it timeless and iconic .
          </p>
          <p className="font-redHat text-base">
            Whether its the insanely fashionable general population, or that
            first breath-taking view of the Eiffel Tower sparkling at night or
            the smell of fresh croissants, —Paris is pure magic. And Im here to
            give you the most intimate, authentic introduction to this city.
          </p>
          <p className="font-redHat text-base">
            If youre planning a solo trip to Paris, dont worry, Ill show you how
            to enjoy it all by yourself! So grab your most glamorous ensembles,
            and lets raise the temperature of Paris together!
          </p>
          <p className="font-redHat text-base">
            Please note: As compared to other parts of the world, Parisians are
            more hesitant to speak in English, but they appreciate it when you
            try speaking in their own language. Learning a few phrases like
            “Bonjour”(pronounced bo-jur) meaning Hello, “Merci” (pronounced
            mair-see) meaning Thank you, or “Parlez-vous anglais?” (pronounced
            parley-vooz-onglay) meaning Do you speak English? can go a long way
            in making your trip smoother.
          </p>
        </div>

        <div
          className="flex flex-col gap-4 w-full md:w-1/3"
          style={{ border: `5px solid #A78B88` }}
        >
          <div>
            <img src={"/map.svg"} className="w-full h-full" />
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-[260px] h-[290px] rotate-6 md:w-[310px] md:h-[276px]">
              <div
                className="bg-white p-2 shadow-md mx-auto flex flex-col items-center"
                style={{
                  width: "240px",
                  height: "100%",
                  marginTop: 8,
                }}
              >
                <Image
                  src={"/dummy_full.svg"}
                  alt={"Dummy"}
                  width={220}
                  height={250}
                  className="md:w-[270px] md:h-[306px]" // Adjust image size for mobile and larger screens
                />
                <div
                  className="w-full"
                  style={{
                    backgroundColor: "#FFFFFF",
                    marginTop: "-5px", // Ensure it visually "sticks" to the image container
                  }}
                >
                  <p
                    className="font-ragilac mt-1 text-center md:mt-2"
                    style={{ fontSize: 18 }}
                  >
                    ..the sun kisses your skin just right
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Image
            aria-hidden
            style={{ marginTop: -50 }}
            src="/mountains.svg"
            alt="Mountains"
            layout="responsive"
            width={100}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailIntro;
