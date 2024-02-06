import { RootState } from '@/store';

export const historyOrdersSelector = (state: RootState) => state.historyOrders.orders;
