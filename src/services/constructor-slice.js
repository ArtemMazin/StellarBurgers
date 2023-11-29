import { createSlice } from '@reduxjs/toolkit';

export const constructorSlice = createSlice({
  name: 'constructorIngredients',
  initialState: {
    bun: null,
    ingredients: [],
  },
  reducers: {
    addIngredient: (state, action) => {
      state.ingredients.push(action.payload);
    },
    chooseBun: (state, action) => {
      state.bun = action.payload;
    },
  },
});

export const { addIngredient, chooseBun } = constructorSlice.actions;
export default constructorSlice.reducer;
