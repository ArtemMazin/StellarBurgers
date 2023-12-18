import { saveState } from '@/localstorage';

export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  const { initialIngredients, constructorIngredients } = store.getState();

  saveState({ initialIngredients, constructorIngredients });

  return result;
};
