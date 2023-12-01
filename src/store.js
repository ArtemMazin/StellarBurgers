import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './services/ingredients-slice';
import constructorReducer from './services/constructor-slice';
import orderReducer from './services/order-slice';
import { loadState } from './localstorage';
import { localStorageMiddleware } from './middleware/localstorage-middleware';

export const store = configureStore({
  reducer: {
    initialIngredients: ingredientsReducer,
    constructorIngredients: constructorReducer,
    order: orderReducer,
  },
  devTools: true,
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware.middleware),
});
