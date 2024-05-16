import React from "react";
import { chatHistory } from "@/constants/chat";

const HistoryBar = () => {
  return (
    <div className="rounded-2xl p-6 bg-[#111517] w-fit h-[600px] flex flex-col gap-6">
      <button className="border text-white p-4 rounded-2xl border-gray-600">
        + New chat
      </button>
      <div className="flex flex-col gap-4">
        {chatHistory.map((history) => (
          <div className="flex flex-col gap-2" key={history.title}>
            <p className="text-gray-500">{history.title}</p>
            {history.list.map((item) => (
              <p className="text-white" key={item}>
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryBar;
