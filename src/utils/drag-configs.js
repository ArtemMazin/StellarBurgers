import { addIngredient, chooseBun } from '@/services/constructor/constructor-slice';

export const config = {
  BUN: {
    type: 'bun',
    action: chooseBun,
  },
  MAIN: {
    type: 'main',
    action: addIngredient,
  },
  SAUCE: {
    type: 'sauce',
    action: addIngredient,
  },
};

export const ItemTypes = {
  INGREDIENT: 'ingredient',
  SORTER: 'sorter',
};
