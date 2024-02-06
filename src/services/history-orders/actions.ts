import { createAction } from '@reduxjs/toolkit';

export const connect = createAction<string, 'WS_HISTORY_FEED_CONNECT'>('WS_HISTORY_FEED_CONNECT');
export const disconnect = createAction('WS_HISTORY_FEED_DISCONNECT');