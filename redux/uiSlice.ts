"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  
  // define states
  activeSideBarItem: string;
  activeTab: string;
  darkMode: boolean;
}
const initialState: userState = {
  // initialize states
  activeSideBarItem: 'recorder',
  activeTab: 'general',
  darkMode: false,
};
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveSideBarItem: (state, action) => {
      state.activeSideBarItem = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    toggleMode: (state, action) => {
      state.darkMode = ! state.darkMode;
    },
  },
});

export const {
  setActiveSideBarItem,
  toggleMode,
  setActiveTab,
} = uiSlice.actions;
export default uiSlice.reducer;
