import { RootState } from '@/store';

export const currentOrder = (state: RootState) => state.order.order;
export const orderStatus = (state: RootState) => state.order.status;
export const orderError = (state: RootState) => state.order.error;
