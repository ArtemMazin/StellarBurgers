import { getProfileUser, login, register, logout } from '@/utils/api-user';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const registerThunk = createAsyncThunk(
  'user/register-user',
  async ({ name, email, password }) => {
    if (!name || !email || !password) throw new Error('Заполните все поля формы');
    const data = await register(name, email, password);

    return data;
  },
);

export const loginThunk = createAsyncThunk('user/login-user', async ({ email, password }) => {
  if (!email || !password) throw new Error('Заполните все поля формы');
  const data = await login(email, password);

  return data;
});

export const getProfileUserThunk = createAsyncThunk('user/get-profile-user', async () => {
  const data = await getProfileUser();

  return data;
});

export const logoutThunk = createAsyncThunk('user/logout', async () => {
  await logout();
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuthChecked: false,
  },
  reducers: {
    setAuthChecked: (state, action) => {
      state.isAuthChecked = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.error = null;
        state.status = 'succeeded';
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginThunk.fulfilled, (state) => {
        state.error = null;
        state.status = 'succeeded';
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getProfileUserThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProfileUserThunk.fulfilled, (state) => {
        state.error = null;
        state.status = 'succeeded';
      })
      .addCase(getProfileUserThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setAuthChecked, setUser } = userSlice.actions;
export default userSlice.reducer;
