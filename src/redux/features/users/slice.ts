import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/shared/types/aijusrist";

interface UsersState {
  usersList: User[];
}

const initialState: UsersState = {
  usersList: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.usersList = action.payload;
    },
  },
});

export const { setName } = userSlice.actions;
export default userSlice.reducer;
