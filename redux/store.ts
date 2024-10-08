"use client";
import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import authSlice from "./authSlice";


export const store = configureStore({
  reducer: {
    ui: uiSlice,
    auth: authSlice,
    // settings: settingsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch ;
