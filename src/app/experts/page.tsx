import React from "react";
import Header from "@/components/Header/page";
import Filters from "@/components/CategoryComponents/Filters";
import { expertsList } from "@/constants/userApp/experts";
import ExpertCard from "@/components/CategoryComponents/ExpertCard";

const Page = () => {
  return (
    <div className="bg-black h-fit">
      <Header />
      <div className="w-full flex flex-col items-center">
        <div className="w-10/12">
          <Filters />
          <div className="flex gap-4 flex-wrap justify-between my-16">
            {expertsList.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
