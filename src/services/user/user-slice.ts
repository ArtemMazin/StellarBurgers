import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register, updateUser } from './actions';
import { TUser } from '@/utils/types';

type TInitialUserSlice = {
  user: Omit<TUser, 'password'> | null;
  isAuthChecked: boolean;
  error: string | null;
};

const initialState: TInitialUserSlice = {
  user: null,
  isAuthChecked: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setAuthChecked(state, action) {
      state.isAuthChecked = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { setUser, setAuthChecked } = userSlice.actions;
export default userSlice.reducer;
