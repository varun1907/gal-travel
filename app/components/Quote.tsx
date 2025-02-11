"use client";
import React from "react";
import Image from "next/image";

const Quote = ({ quoteList, idx, total_blogs }: any) => {
  let output: any = [];
  if (quoteList?.length > 0) {
    let number_of_rows = Math.ceil(total_blogs / 4);
    const total_quote = number_of_rows - 1;

    const quotes = quoteList;

    if (total_quote <= quotes.length) {
      // When n is less than or equal to array size, pick unique random values
      const shuffled = [...quotes].sort(() => Math.random() - 0.5); // Shuffle the array
      output = shuffled.slice(0, total_quote);
    } else {
      // When n is more than the array size, allow repetition
      for (let i = 0; i < total_quote; i++) {
        const randomIndex = Math.floor(Math.random() * quotes.length); // Pick random index
        output.push(quotes[randomIndex]);
      }
    }
  }

  return (
    <div
      className="col-span-full flex items-center justify-center px-5 md:h-[175px] py-4 md:py-0"
      style={{ border: "1px dashed #A78B88" }}
    >
      <Image
        aria-hidden
        className="mr-3"
        src="/duck.svg"
        alt="Duck"
        width={30}
        height={35}
      />
      <p className="font-redHat text-2xl">
        {output[Math.floor(idx / 4)]?.quote}
      </p>
    </div>
  );
};

export default Quote;
