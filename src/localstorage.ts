import { TIngredient } from './utils/types';

export const loadState = () => {
  try {
    const savedState = localStorage.getItem('burger-state');
    if (savedState === null) {
      return undefined;
    }

    return JSON.parse(savedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state: {
  initialIngredients: TIngredient[];
  constructorIngredients: TIngredient[];
}) => {
  try {
    const stateToBeSaved = JSON.stringify(state);

    localStorage.setItem('burger-state', stateToBeSaved);
  } catch (error) {
    console.error(error);
  }
};
