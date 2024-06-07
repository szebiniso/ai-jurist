"use client";

import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { Tabs } from "flowbite-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { getUsersList } from "@/redux/features/users/reducer";
import { TUsersParams } from "@/shared/types/customTypes";

const Filters: FC<PropsWithChildren> = ({ children }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<number>(0);

  const filtersData = [
    { id: "all", title: "Все" },
    { id: "ugolovnyi", title: "Улоговный кодекс" },
    { id: "semeinyi", title: "Семейный кодекс" },
    { id: "grajdanskyi", title: "Гражданский кодекс" },
    { id: "trudovoyi", title: "Трудовой кодекс" },
    { id: "nalogovyi", title: "Налоговый кодекс" },
    { id: "budjetnyi", title: "Бюджетный кодекс" },
  ];

  const onChangeTab = (tab: number) => {
    setActiveTab(tab);
  };

  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    if (activeTab >= 1) {
      params.set("specialization", filtersData[activeTab].id);
    } else {
      params.delete("specialization");
    }
    replace(`${pathname}?${params.toString()}`);
    dispatch(getUsersList(params as TUsersParams));
  }, [activeTab]);

  return (
    <Tabs onActiveTabChange={onChangeTab} aria-label="Pills" style="pills">
      {filtersData.map(({ id, title }) => (
        <Tabs.Item key={id} active title={title}>
          {children}
        </Tabs.Item>
      ))}
    </Tabs>
  );
};

export default Filters;
