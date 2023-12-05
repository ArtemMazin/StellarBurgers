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
    updateIngredients: {
      reducer: (state, action) => {
        state.ingredients = action.payload;
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
      state.ingredients = action.payload;
    },
    deleteAllIngredient: (state) => {
      state.ingredients = [];
      state.bun = null;
    },
  },
});

export const {
  addIngredient,
  deleteIngredient,
  deleteAllIngredient,
  chooseBun,
  updateIngredients,
} = constructorSlice.actions;
export default constructorSlice.reducer;
