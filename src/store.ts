import { combineReducers, configureStore } from '@reduxjs/toolkit';
import initialIngredientsReducer from './services/initial-ingredients/initial-ingredients-slice';
import constructorReducer from './services/constructor/constructor-slice';
import orderReducer from './services/order/order-slice';
import userReducer from './services/user/user-slice';
import { loadState } from './localstorage';
import { localStorageMiddleware } from './middleware/localstorage-middleware';
import { wsMiddleware } from './middleware/ws-middleware';
import wsReducer from './services/ws/ws-slice';

const rootReducer = combineReducers({
  initialIngredients: initialIngredientsReducer,
  constructorIngredients: constructorReducer,
  order: orderReducer,
  user: userReducer,
  orders: wsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware, wsMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
