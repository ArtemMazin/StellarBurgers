import { configureStore } from '@reduxjs/toolkit';
import initialIngredientsSlice from './services/initial-ingredients/initial-ingredients-slice';
import constructorReducer from './services/constructor/constructor-slice';
import currentIngredientReducer from './services/current-ingredient/current-ingredient-slice';
import orderReducer from './services/order/order-slice';
import { loadState } from './localstorage';
import { localStorageMiddleware } from './middleware/localstorage-middleware';

export const store = configureStore({
  reducer: {
    initialIngredients: initialIngredientsSlice,
    constructorIngredients: constructorReducer,
    currentIngredient: currentIngredientReducer,
    order: orderReducer,
  },
  devTools: true,
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
