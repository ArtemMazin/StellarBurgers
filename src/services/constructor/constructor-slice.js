import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const constructorSlice = createSlice({
  name: 'constructorIngredients',
  initialState: {
    bun: null,
    ingredients: [],
  },
  reducers: {
    addIngredient: {
      reducer: (state, action) => {
        state.ingredients.push(action.payload);
      },
      prepare: (item) => {
        const customId = uuidv4();
        return { payload: { ...item, customId } };
      },
    },
    chooseBun: {
      reducer: (state, action) => {
        state.bun = action.payload;
      },
      prepare: (item) => {
        const customId = uuidv4();
        return { payload: { ...item, customId } };
      },
    },
    deleteIngredient: (state, action) => {
      state.ingredients = state.ingredients.filter((item) => item.customId !== action.payload);
    },
  },
});

export const { addIngredient, deleteIngredient, chooseBun } = constructorSlice.actions;
export default constructorSlice.reducer;
