"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  
  // define states
  darkMode: boolean;
}
const initialState: userState = {
  // initialize states
  darkMode: false,
};
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
  
    toggleMode: (state, action) => {
      state.darkMode = ! state.darkMode;
    },
  },
});

export const {
  toggleMode,
 
} = uiSlice.actions;
export default uiSlice.reducer;
