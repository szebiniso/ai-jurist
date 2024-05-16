import React from "react";
import Image from "next/image";

const ChatPanel = () => {
  return (
    <div className="flex justify-center items-end h-full">
      <div className="flex items-center gap-2 w-10/12">
        {/*<div className="p-2 h-fit border border-gray-500 rounded text-gray-500 w-fit">*/}
        {/*  +*/}
        {/*</div>*/}
        <input
          className="bg-[#262626] rounded-2xl p-4 w-full"
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
  );
};

export default ChatPanel;
