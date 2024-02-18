import { TOrder } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TInitialState = {
  wsError: string | null;
  orders: TOrder[];
};

export const initialState: TInitialState = {
  wsError: null,
  orders: [],
};

export const wsHistoryOrdersSlice = createSlice({
  name: 'socket-profile-orders',
  initialState,
  reducers: {
    onError: (state, action: PayloadAction<string>) => {
      state.wsError = action.payload;
    },
    onMessage: (state, action) => {
      state.orders = action.payload.orders.reverse();
    },
  },
});

export const { onError, onMessage } = wsHistoryOrdersSlice.actions;
export default wsHistoryOrdersSlice.reducer;
