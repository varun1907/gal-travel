import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

const ragilac = localFont({
  src: [
    {
      path: "/../public/fonts/Ragilac.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ragilac", // CSS variable for ragilac
});

const redHat = localFont({
  src: [
    {
      path: "/../public/fonts/RedHatDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/../public/fonts/RedHatDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/../public/fonts/RedHatDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/../public/fonts/RedHatDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-redHat", // CSS variable for redHat
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ragilac.variable} ${redHat.variable} antialiased`}>
        <Header />
        {children}
        <footer>
          <div
            className="hero"
            style={{
              height: 600,
              width: "100%",
              backgroundImage: "url(../newsletter.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-lg">
                <Image
                  aria-hidden
                  className="mb-3 mx-auto"
                  src="/footer_line.svg"
                  alt="Footer line"
                  width={580}
                  height={38}
                />
                <p className="mb-2 text-3xl font-redHat font-medium">
                  Subscribe to my Monthly Newsletter
                </p>
                <p className="mb-7 font-redHat font-medium text-base">
                  Don’t Miss Out! Be the First to Know About New Destinations,
                  Offers, and Luxury Travel Experiences.
                </p>
                <button className="btn btn-accent text-white btn-lg">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          <div className="block md:flex">
            <div className="flex flex-col md:flex-row w-full flex-1">
              {/* Email */}
              <div
                className="flex justify-center items-center h-16 md:h-14"
                style={{ background: "#C95C5C", flex: "0.1" }}
              >
                <Link
                  href="/privacy-policy"
                  className="font-redHat text-base font-regular text-center w-full"
                >
                  Email
                </Link>
              </div>
              {/* Pinterest */}
              <div
                className="flex justify-center items-center h-16 md:h-14"
                style={{ background: "#E5B791", flex: "0.3" }}
              >
                <Link
                  href="/privacy-policy"
                  className="font-redHat text-base font-regular text-center w-full"
                >
                  Pinterest
                </Link>
              </div>
              {/* Instagram */}
              <div
                className="flex justify-center items-center h-16 md:h-14"
                style={{ background: "#E7BFBF", flex: "0.6" }}
              >
                <Link
                  href="/privacy-policy"
                  className="font-redHat text-base font-regular text-center w-full"
                >
                  Instagram
                </Link>
              </div>
            </div>

            {/* Privacy Policy and Footer Text */}
            <div
              className="flex justify-center items-center h-14 w-full md:flex-1"
              style={{ backgroundColor: "#EAD5C4" }}
            >
              <div className="flex justify-center items-center">
                <Link
                  href="/privacy-policy"
                  className="font-redHat text-base font-regular underline"
                >
                  Privacy Policy
                </Link>
                <span className="font-redHat text-base font-regular px-2">
                  |
                </span>
                <p className="font-redHat text-base font-regular">
                  GalTravel © 2024
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
