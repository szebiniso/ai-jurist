import React from "react";
import Filters from "@/components/ExpertComponents/Filters";
import Header from "@/components/Header/page";
import { categoriesList } from "@/app/experts/constant";
import Card from "@/components/ExpertComponents/Card";

const Experts = () => {
  return (
    <div className="bg-black h-fit">
      <Header />
      <div className="w-full flex flex-col items-center">
        <div className="w-10/12">
          <Filters />
          <div className="flex gap-10 flex-wrap justify-between my-16">
            {categoriesList.map((category) => (
              <Card key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
