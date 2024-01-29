import { TOrder, WebsocketStatus } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TinitialState = {
  wsStatus: WebsocketStatus;
  success: boolean;
  wsError: string | undefined;
  orders: TOrder[] | null;
  total: number;
  totalToday: number;
};

const initialState: TinitialState = {
  wsStatus: WebsocketStatus.OFFLINE,
  success: false,
  wsError: undefined,
  orders: null,
  total: 0,
  totalToday: 0,
};

export const wsOrdersSlice = createSlice({
  name: 'socket-orders',
  initialState,
  reducers: {
    wsConnect: (state, action: PayloadAction<string>) => {
      state.wsStatus = WebsocketStatus.CONNECTING;
    },

    wsOpen: (state) => {
      state.wsStatus = WebsocketStatus.ONLINE;
      state.wsError = '';
    },
    wsClose: (state) => {
      state.wsStatus = WebsocketStatus.OFFLINE;
    },
    wsError: (state, action: PayloadAction<string>) => {
      state.wsError = action.payload;
    },
    getOrders: (state, action) => {
      state.success = action.payload.success;
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    },
  },
});

export const { wsConnect, wsOpen, wsError, wsClose, getOrders } = wsOrdersSlice.actions;
export default wsOrdersSlice.reducer;