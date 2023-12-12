import { getProfileUser, login, register } from '@/utils/api-user';
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

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuthChecked: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'succeeded';
        state.user = action.payload.user;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.isAuthChecked = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getProfileUserThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProfileUserThunk.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.isAuthChecked = true;
      })
      .addCase(getProfileUserThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
