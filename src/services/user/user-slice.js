import * as api from '@/utils/api-user';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
  'user/register-user',
  async ({ name, email, password }) => {
    if (!name || !email || !password) throw new Error('Заполните все поля формы');
    const data = await api.register(name, email, password);

    return data;
  },
);

export const login = createAsyncThunk('user/login-user', async ({ email, password }) => {
  if (!email || !password) throw new Error('Заполните все поля формы');
  const data = await api.login(email, password);

  return data;
});

export const getUser = createAsyncThunk('user/get-profile-user', async () => {
  const data = await api.getProfileUser();

  return data;
});

export const logout = createAsyncThunk('user/logout', async () => {
  await api.logout();
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state) => {
        state.error = null;
        state.status = 'succeeded';
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state) => {
        state.error = null;
        state.status = 'succeeded';
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUser.fulfilled, (state) => {
        state.error = null;
        state.status = 'succeeded';
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
