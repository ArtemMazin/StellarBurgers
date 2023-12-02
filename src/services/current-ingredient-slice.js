import { createSlice } from '@reduxjs/toolkit';

export const currentIngredientSlice = createSlice({
  name: 'currentIngredient',
  initialState: {
    currentIngredient: null,
  },
  reducers: {
    setCurrentIngredient: {
      reducer: (state, action) => {
        state.currentIngredient = action.payload;
      },
    },
    removeCurrentIngredient: {
      reducer: (state) => {
        state.currentIngredient = null;
      },
    },
  },
});

export const { setCurrentIngredient, removeCurrentIngredient } = currentIngredientSlice.actions;
export default currentIngredientSlice.reducer;
