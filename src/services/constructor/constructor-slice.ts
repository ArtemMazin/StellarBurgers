import { TIngredient } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type TConstructorSlice = {
  bun: TIngredient | null;
  ingredients: TIngredient[];
};

const initialState: TConstructorSlice = {
  bun: null,
  ingredients: [],
};

export const constructorSlice = createSlice({
  name: 'constructorIngredients',
  initialState,
  reducers: {
    addIngredient: {
      reducer: (state, action: PayloadAction<TIngredient>) => {
        state.ingredients.push(action.payload);
      },
      prepare: (item: Required<Omit<TIngredient, 'customId'>>) => {
        const customId = uuidv4();
        return { payload: { ...item, customId } };
      },
    },
    chooseBun: {
      reducer: (state, action: PayloadAction<TIngredient>) => {
        state.bun = action.payload;
      },
      prepare: (item: TIngredient) => {
        const customId = uuidv4();
        return { payload: { ...item, customId } };
      },
    },
    updateIngredients: (state, action: PayloadAction<TIngredient[]>) => {
      state.ingredients = action.payload;
    },
    deleteIngredient: (state, action: PayloadAction<TIngredient[]>) => {
      state.ingredients = action.payload;
    },
    deleteAllIngredients: (state) => {
      state.ingredients = [];
      state.bun = null;
    },
  },
});

export const {
  addIngredient,
  deleteIngredient,
  deleteAllIngredients,
  chooseBun,
  updateIngredients,
} = constructorSlice.actions;
export default constructorSlice.reducer;
