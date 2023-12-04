import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState: {
    currentTab: 'Булки',
  },
  reducers: {
    tabSwitch: {
      reducer: (state, action) => {
        state.currentTab = action.payload;
      },
    },
  },
});

export const { tabSwitch } = tabsSlice.actions;
export default tabsSlice.reducer;
