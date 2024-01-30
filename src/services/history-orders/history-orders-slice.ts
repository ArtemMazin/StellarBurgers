import { TOrder, WebsocketStatus } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TinitialState = {
  wsStatus: WebsocketStatus;
  success: boolean;
  wsError: string | undefined;
  orders: TOrder[] | null;
};

const initialState: TinitialState = {
  wsStatus: WebsocketStatus.OFFLINE,
  success: false,
  wsError: undefined,
  orders: null,
};

export const wsHistoryOrdersSlice = createSlice({
  name: 'socket-profile-orders',
  initialState,
  reducers: {
    wsConnect: (state, action: PayloadAction<string>) => {
      state.wsStatus = WebsocketStatus.CONNECTING;
    },

    onOpen: (state) => {
      state.wsStatus = WebsocketStatus.ONLINE;
      state.wsError = '';
    },
    onClose: (state) => {
      state.wsStatus = WebsocketStatus.OFFLINE;
    },
    onError: (state, action: PayloadAction<string>) => {
      state.wsError = action.payload;
    },
    onMessage: (state, action) => {
      state.success = action.payload.success;
      state.orders = action.payload.orders.reverse();
    },
  },
});

export const { wsConnect, onOpen, onError, onClose, onMessage } = wsHistoryOrdersSlice.actions;
export default wsHistoryOrdersSlice.reducer;
