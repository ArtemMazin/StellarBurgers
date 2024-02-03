import { createAction } from '@reduxjs/toolkit';

export const connect = createAction<string, 'WS_FEED_CONNECT'>('WS_FEED_CONNECT');
export const disconnect = createAction('WS_FEED_DISCONNECT');