import { combineReducers, configureStore } from '@reduxjs/toolkit';
import initialIngredientsReducer from './services/initial-ingredients/initial-ingredients-slice';
import constructorReducer from './services/constructor/constructor-slice';
import orderReducer from './services/order/order-slice';
import userReducer from './services/user/user-slice';
import { loadState } from './localstorage';
import { localStorageMiddleware } from './middleware/localstorage-middleware';
import { wsOrdersMiddleware } from './middleware/order-feed-middleware';
import wsOrdersReducer from './services/order-feed/order-feed-slice';
import wsHistoryOrdersReducer from './services/history-orders/history-orders-slice';
import { wsHistoryOrdersMiddleware } from './middleware/history-orders-middleware';

const rootReducer = combineReducers({
  initialIngredients: initialIngredientsReducer,
  constructorIngredients: constructorReducer,
  order: orderReducer,
  user: userReducer,
  orders: wsOrdersReducer,
  historyOrders: wsHistoryOrdersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      localStorageMiddleware,
      wsOrdersMiddleware,
      wsHistoryOrdersMiddleware,
    ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
