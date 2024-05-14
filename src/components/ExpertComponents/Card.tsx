import React, { FC } from "react";
import Button from "@/components/UI/Button";
import { TCategory } from "@/app/experts/constant";

type TProps = {
  category: TCategory;
};

const Card: FC<TProps> = ({ category }) => {
  return (
    <div className="flex flex-col gap-4 w-1/4">
      <h3 className="text-white text-3xl">{category.title}</h3>
      <p className="text-gray-500">{category.description}</p>
      <Button text="Перейти" />
    </div>
  );
};

export default Card;
