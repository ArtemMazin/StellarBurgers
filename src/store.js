import { configureStore } from '@reduxjs/toolkit';
import initialIngredientsReducer from './services/initial-ingredients/initial-ingredients-slice';
import constructorReducer from './services/constructor/constructor-slice';
import currentIngredientReducer from './services/current-ingredient/current-ingredient-slice';
import orderReducer from './services/order/order-slice';
import userReducer from './services/user/user-slice';
import { loadState } from './localstorage';
import { localStorageMiddleware } from './middleware/localstorage-middleware';

export const store = configureStore({
  reducer: {
    initialIngredients: initialIngredientsReducer,
    constructorIngredients: constructorReducer,
    currentIngredient: currentIngredientReducer,
    order: orderReducer,
    user: userReducer,
  },
  devTools: true,
  preloadedState: loadState(),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
