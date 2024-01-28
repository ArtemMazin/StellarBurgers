import { RootState } from '@/store';

export const ordersSelector = (state: RootState) => state.orders.orders;
export const totalOrdersSelector = (state: RootState) => state.orders.total;
export const totalTodayOrdersSelector = (state: RootState) => state.orders.totalToday;
