import { getOrders, wsClose, wsConnect, wsError, wsOpen } from '@/services/ws/ws-slice';
import { RootState } from '@/store';
import { Middleware } from 'redux';

export const wsMiddleware: Middleware<RootState> = (store) => (next) => (action) => {
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

      dispatch(getOrders(parsedData));
    };

    socket.onclose = () => {
      dispatch(wsClose());
    };

    return result;
  }
};
