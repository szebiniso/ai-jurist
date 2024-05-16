"use client";

import React from "react";
import { useRouter } from "next/router";

const Filters = () => {
  const filtersData = [
    { id: "все", title: "Все" },
    { id: "улоговный", title: "Улоговный кодекс" },
    { id: "семейный", title: "Семейный кодекс" },
    { id: "гражданский", title: "Гражданский кодекс" },
    { id: "трудовой", title: "Трудовой кодекс" },
    { id: "налоговый", title: "Налоговый кодекс" },
    { id: "бюджетный", title: "Бюджетный кодекс" },
  ];

  return (
    <div className="flex gap-4 text-white">
      {filtersData.map(({ id, title }) => (
        <p
          className="border border-gray-600 p-2 rounded-3xl cursor-pointer"
          key={id}
        >
          {title}
        </p>
      ))}
    </div>
  );
};

export default Filters;
