import { combineReducers, configureStore } from '@reduxjs/toolkit';
import initialIngredientsReducer from './services/initial-ingredients/initial-ingredients-slice';
import constructorReducer from './services/constructor/constructor-slice';
import orderReducer from './services/order/order-slice';
import userReducer from './services/user/user-slice';
import { loadState } from './localstorage';
import { localStorageMiddleware } from './middleware/localstorage-middleware';
import { socketMiddleware } from './middleware/order-feed-middleware';
import wsOrdersReducer from './services/order-feed/order-feed-slice';
import wsHistoryOrdersReducer from './services/history-orders/history-orders-slice';
import {
  connect as OrdersWsConnect,
  disconnect as OrdersWsDisconnect
} from './services/order-feed/actions';
import {
  onMessage as OrdersWsMessage,
  onError as OrdersWsError,
} from './services/order-feed/order-feed-slice';
import {
  connect as HistoryOrdersWsConnect,
  disconnect as HistoryOrdersWsDisconnect
} from './services/history-orders/actions';
import {
  onMessage as HistoryOrdersWsMessage,
  onError as HistoryOrdersWsError,
} from './services/history-orders/history-orders-slice';

const wsActions = {
  wsConnect: OrdersWsConnect,
  wsDisconnect: OrdersWsDisconnect,
  onError: OrdersWsError,
  onMessage: OrdersWsMessage,
};

const wsHistoryOrderActions = {
  wsConnect: HistoryOrdersWsConnect,
  wsDisconnect: HistoryOrdersWsDisconnect,
  onError: HistoryOrdersWsError,
  onMessage: HistoryOrdersWsMessage,
};

const wsOrdersMiddleware = socketMiddleware(wsActions);
const wsHistoryOrdersMiddleware = socketMiddleware(wsHistoryOrderActions, true);

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
