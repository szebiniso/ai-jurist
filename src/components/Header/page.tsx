import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-12">
      <div className="flex items-center gap-24">
        <Image src={"/images/Logo.svg"} alt="/" width={140} height={20} />
        <ul className="flex justify-between gap-16 text-sm">
          <li className="text-gray-400 hover:text-c-white cursor-pointer">
            HOME
          </li>
          <li className="text-gray-400 hover:text-c-white cursor-pointer">
            FEATURES
          </li>
          <li className="text-gray-400 hover:text-c-white cursor-pointer">
            DEMO
          </li>
          <li className="text-gray-400 hover:text-c-white cursor-pointer">
            ABOUT US
          </li>
        </ul>
      </div>

      <div className="flex gap-4 items-center">
        <button className="border rounded-full text-c-white py-2 px-4">
          Get started
        </button>
        <div className="border rounded-full p-2">
          <Image
            src={"/icons/Avatar.svg"}
            alt="avatar"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
