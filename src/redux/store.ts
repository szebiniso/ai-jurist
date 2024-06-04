"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/slice";
import userReducer from "./features/users/slice";
import consultationReducer from "./features/consultation/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    consultation: consultationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
