"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const arr = [
  "Explain quantum computing in simple terms",
  "Got any creative ideas for a 10 year old’s birthday?",
  "How do I make an HTTP request in Javascript?",
];

const ChatPanel = () => {
  const searchParams = useSearchParams();

  return (
    <div className="flex justify-center items-end h-full">
      <div className="flex flex-col gap-28 w-10/12">
        <div className="flex flex-col items-center gap-4">
          <p className="text-white text-2xl mb-2">Try this prompt</p>
          {arr.map((item) => (
            <div
              key={item}
              className="p-4 bg-[#262626] rounded-2xl w-[400px] flex justify-between "
            >
              <p className="text-white text-sm">{item}</p>
              <Image
                className="m-auto"
                src="/icons/arrowRight.svg"
                alt="product"
                width={25}
                height={25}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input
            className="bg-[#262626] rounded-2xl p-4 w-full text-white"
            placeholder="Enter your prompt"
          />
          <Image
            className="m-auto"
            // data-aos="zoom-in"
            src="/images/send.svg"
            alt="product"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
