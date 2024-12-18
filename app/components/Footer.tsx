"use client";
import { API, fireApiAction } from "@/config/api";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [show_success, set_show_success] = useState(false);
  const [footer_content, set_footer_content] = useState({
    footer_heading: "Subscribe to my Monthly Newsletter",
    footer_subheading:
      "Don’t Miss Out! Be the First to Know About New Destinations, Offers, and Luxury Travel Experiences.",
  });

  useEffect(() => {
    const res = fetchFooterDetails();
  }, []);

  async function fetchFooterDetails() {
    const params = {
      "fields[]": "footer_heading,footer_subheading",
    };

    try {
      const result = await fireApiAction(API.footer, "GET", params);
      if (result?.data) {
        console.log(result.data);
        return result.data;
      }
      throw new Error("Not Found");
    } catch (error) {
      return null;
    }
  }

  const save_data = async () => {
    try {
      const data = {
        subscriber_name: name,
        subscriber_email: email,
      };
      const result = await fireApiAction(API.subscriber_emails, "POST", data);
      set_show_success(true);
      throw new Error("Not Found");
    } catch (error) {
      set_show_success(true);
    }
  };

  return (
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
            {show_success && (
              <>
                <p className="mb-2 text-xl font-redHat font-medium">
                  Adventure Awaits! Thanks for Signing Up!
                </p>
                <Image
                  aria-hidden
                  className="mb-3 mx-auto"
                  src="/footer_line.svg"
                  alt="Footer line"
                  width={580}
                  height={38}
                />
              </>
            )}
            {!show_success && (
              <>
                <p className="mb-2 text-xl font-redHat font-medium">
                  {footer_content?.footer_heading}
                </p>
                <p className="mb-7 font-redHat font-medium text-base">
                  {footer_content?.footer_subheading}
                </p>

                <div className="flex flex-col md:flex-row items-start space-y-10 md:space-y-0 md:space-x-4 p-6">
                  <input
                    value={name}
                    onChange={(e) => {
                      set_name(e.target.value);
                    }}
                    id="textFieldName"
                    type="text"
                    placeholder="Name"
                    className="w-full border-b-2 border-gray-300 placeholder-white focus:outline-none focus:border-b-2 focus:border-gray-300 bg-transparent p-2"
                  />
                  <input
                    value={email}
                    onChange={(e) => {
                      set_email(e.target.value);
                    }}
                    id="textFieldEmail"
                    type="text"
                    placeholder="Email"
                    className="w-full border-b-2 border-gray-300 placeholder-white focus:outline-none focus:border-b-2 focus:border-gray-300 bg-transparent p-2"
                  />
                </div>
                <button
                  className="btn btn-accent text-white btn-lg"
                  onClick={save_data}
                >
                  SUBSCRIBE
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="block md:flex">
        <div className="flex flex-col md:flex-row w-full flex-1">
          {/* Email */}
          <div
            className="flex justify-center items-center h-16 md:h-14"
            style={{ background: "#C95C5C", flex: "0.5" }}
          >
            <Link
              href="mailto:galtravelbychandni@gmail.com"
              className="font-redHat text-base font-regular text-center w-full"
            >
              Email
            </Link>
          </div>
          {/* Pinterest */}
          {/* <div
            className="flex justify-center items-center h-16 md:h-14"
            style={{ background: "#E5B791", flex: "0.3" }}
          >
            <Link
              href="/privacy-policy"
              className="font-redHat text-base font-regular text-center w-full"
            >
              Pinterest
            </Link>
          </div> */}
          {/* Instagram */}
          <div
            className="flex justify-center items-center h-16 md:h-14"
            style={{ background: "#E7BFBF", flex: "0.5" }}
          >
            <Link
              href="https://www.instagram.com/galtravelstory/"
              target="_blank"
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
            <span className="font-redHat text-base font-regular px-2">|</span>
            <p className="font-redHat text-base font-regular">
              GalTravel © 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
