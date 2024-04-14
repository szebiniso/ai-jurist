import React from "react";
import { SECTIONS_TITLE_1, SECTIONS_TITLE_2 } from "@/constants/landing";

const Sections = () => {
  return (
    <div className="bg-black text-center flex flex-col items-center">
      <h2 className="text-6xl text-white whitespace-pre-wrap w-2/4 font-medium">
        {SECTIONS_TITLE_1}
      </h2>
      <h2 className="text-6xl text-blue-700 whitespace-pre-wrap font-medium">
        {SECTIONS_TITLE_2}
      </h2>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Sections;
