import { createSlice } from "@reduxjs/toolkit";
import { ChatRoom } from "@/shared/types/aijusrist";
import { getChatRoomList } from "@/redux/features/chat/reducer";

interface ChatState {
  chatroomList: {
    loading: boolean;
    error?: string | null;
    success: boolean;
    chatroomList: ChatRoom[];
  };
}

const initialState: ChatState = {
  chatroomList: {
    loading: false,
    error: null,
    success: false,
    chatroomList: [],
  },
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChatRoomList.pending, (state, action) => {
      state.chatroomList.loading = true;
      state.chatroomList.error = null;
      state.chatroomList.success = false;
    });
    builder.addCase(getChatRoomList.fulfilled, (state, action) => {
      state.chatroomList.loading = false;
      state.chatroomList.error = null;
      state.chatroomList.success = true;
      state.chatroomList.chatroomList = action.payload;
    });
    builder.addCase(getChatRoomList.rejected, (state, action) => {
      state.chatroomList.loading = false;
      state.chatroomList.error = action.error.message;
      state.chatroomList.success = false;
    });
  },
});

export const {} = chatSlice.actions;

export default chatSlice.reducer;
