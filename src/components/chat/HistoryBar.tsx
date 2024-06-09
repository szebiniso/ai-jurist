"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import CModal from "@/components/UI/Modal";
import { addChatRoom, getChatRoomList } from "@/redux/features/chat/reducer";
import { toastError, toastSuccess } from "@/components/Toasts/toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const HistoryBar = () => {
  const dispatch = useAppDispatch();
  const chatRoomList = useSelector(
    (state: RootState) => state.chat.chatroomList.chatroomList,
  );
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [chatRoomName, setChatRoomName] = useState<string>("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const toggleOpenModal = () => setOpenModal(!openModal);

  const createNewChatRoom = () => {
    chatRoomName.length &&
      dispatch(addChatRoom({ name: chatRoomName }))
        .unwrap()
        .then(() => {
          toastSuccess("You successfully create a new room!");
          toggleOpenModal();
          dispatch(getChatRoomList());
        })
        .catch(() => {
          toastError("Something wrong");
        });
  };
  const params = new URLSearchParams(searchParams);
  const onChooseChatRoom = (id: number) => {
    params.set("room", `${id}`);
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    dispatch(getChatRoomList());
  }, []);

  return (
    <div className="rounded-2xl p-6 bg-[#111517] w-fit h-[600px] flex flex-col gap-6">
      <button
        onClick={toggleOpenModal}
        className="border text-white p-4 rounded-2xl border-gray-600"
      >
        + New chat
      </button>
      <div className="flex flex-col gap-4">
        {chatRoomList.map((history) => (
          <p
            onClick={() => onChooseChatRoom(history.id)}
            className="text-white text-sm cursor-pointer"
            key={history.id}
          >
            {history.name}
          </p>
        ))}
      </div>
      <CModal open={openModal} closeModal={toggleOpenModal}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-center">Create new room</h2>
          <input
            className="rounded-xl p-4"
            onChange={(e) => setChatRoomName(e.target.value)}
          />
          <button
            disabled={!chatRoomName.length}
            onClick={createNewChatRoom}
            className="border-gray-900 p-4 bg-gray-700 text-white rounded-xl"
          >
            CREATE
          </button>
        </div>
      </CModal>
    </div>
  );
};

export default HistoryBar;
