import { RootState } from '@/store';

export const initialIngredients = (state: RootState) => state.initialIngredients.initialIngredients;
export const statusIngredients = (state: RootState) => state.initialIngredients.status;
export const errorIngredients = (state: RootState) => state.initialIngredients.error;
