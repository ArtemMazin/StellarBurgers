import { RootState } from '@/store';

export const currentUser = (state: RootState) => state.user.user;
export const statusUser = (state: RootState) => state.user.status;
export const errorUser = (state: RootState) => state.user.error;
