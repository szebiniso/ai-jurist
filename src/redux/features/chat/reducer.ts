import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/redux/service/api/api";
import { ChatRoom } from "@/shared/types/aijusrist";

export const getChatRoomList = createAsyncThunk(
  "chat/getChatRoomList",
  async () => {
    try {
      const response = await api.chat.getChatRoomList();
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const addChatRoom = createAsyncThunk(
  "chat/addChatRoom",
  async (data: Partial<ChatRoom>) => {
    try {
      const response = await api.chat.addChatRoom(data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);
