import { RootState } from '@/store';
import { ActionCreatorWithPayload, ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import { Middleware } from 'redux';

export type TwsActionTypes = {
  wsConnect: ActionCreatorWithPayload<string>;
  wsSendMessage?: ActionCreatorWithPayload<any>;
  onOpen: ActionCreatorWithoutPayload;
  onClose: ActionCreatorWithoutPayload;
  onError: ActionCreatorWithPayload<string>;
  onMessage: ActionCreatorWithPayload<any>;
};

export const socketMiddleware =
  (wsActions: TwsActionTypes): Middleware<RootState> =>
  (store) =>
  (next) =>
  (action) => {
    const { wsConnect, onOpen, onClose, onError, onMessage } = wsActions;
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
        dispatch(onOpen());
      };

      socket.onerror = () => {
        dispatch(onError('Error'));
      };

      socket.onmessage = (event: MessageEvent<string>) => {
        const { data } = event;
        const parsedData = JSON.parse(data);

        dispatch(onMessage(parsedData));
      };

      socket.onclose = () => {
        dispatch(onClose());
      };

      return result;
    }
  };
