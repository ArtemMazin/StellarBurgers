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
    deleteIngredient: (state, action) => {
      state.ingredients = state.ingredients.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addIngredient, deleteIngredient, chooseBun } = constructorSlice.actions;
export default constructorSlice.reducer;
