import React, { FC } from "react";
import { TExpert } from "@/constants/userApp/experts";
import Image from "next/image";
import Link from "next/link";

type TProps = {
  expert: TExpert;
};

const Card: FC<TProps> = ({ expert }) => {
  return (
    <Link href="/experts/2" className="flex flex-col gap-1 w-1/5">
      <img className="rounded-2xl" src={expert.photo} alt="/" />
      <h3 className="text-white text-xl">{expert.name}</h3>
      <p className="text-gray-500">{expert.type}</p>
    </Link>
  );
};

export default Card;
