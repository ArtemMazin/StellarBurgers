import { RootState } from '@/store';

export const allIngredients = (state: RootState) => state.constructorIngredients.ingredients;
export const selectedBun = (state: RootState) => state.constructorIngredients.bun;
