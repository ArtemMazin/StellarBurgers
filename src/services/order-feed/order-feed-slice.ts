import { TOrder } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TInitialState = {
  wsError: string | null;
  orders: TOrder[];
  total: number;
  totalToday: number;
};

const initialState: TInitialState = {
  wsError: null,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const wsOrdersSlice = createSlice({
  name: 'socket-orders',
  initialState,
  reducers: {
    onError: (state, action: PayloadAction<string>) => {
      state.wsError = action.payload;
    },
    onMessage: (state, action) => {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    },
  },
});

export const { onError, onMessage } = wsOrdersSlice.actions;
export default wsOrdersSlice.reducer;
