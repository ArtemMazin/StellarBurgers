import { saveState } from '@/localstorage';
import { RootState } from '@/store';
import { Middleware } from 'redux';

export const localStorageMiddleware: Middleware<RootState> = (store) => (next) => (action) => {
  const result = next(action);

  const { initialIngredients, constructorIngredients } = store.getState();

  saveState({ initialIngredients, constructorIngredients });

  return result;
};
