import {
  getOrders,
  wsClose,
  wsConnect,
  wsError,
  wsOpen,
} from '@/services/history-orders/history-orders-slice';
import { RootState } from '@/store';
import { Middleware } from 'redux';

export const wsHistoryOrdersMiddleware: Middleware<RootState> = (store) => (next) => (action) => {
  const result = next(action);
  const { dispatch } = store;
  let socket: WebSocket | null = null;
  let url = '';

  if (wsConnect.match(action)) {
    url = action.payload;
    socket = new WebSocket(url);
  }

  if (socket) {
    socket.onopen = () => {
      dispatch(wsOpen());
    };

    socket.onerror = () => {
      dispatch(wsError('Error'));
    };

    socket.onmessage = (event: MessageEvent<string>) => {
      const { data } = event;
      const parsedData = JSON.parse(data);

      // if (parsedData.message === 'Invalid or missing token') {
      //   dispatch(wsError('Error'));
      //   return;
      // }

      dispatch(getOrders(parsedData));
    };

    socket.onclose = () => {
      dispatch(wsClose());
    };

    return result;
  }
};
