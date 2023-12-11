import { register } from '@/utils/api-user';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const registerThunk = createAsyncThunk(
  'user/register-user',
  async ({ name, email, password }) => {
    if (!name || !email || !password) throw new Error('Заполните все поля формы');
    const data = await register(name, email, password);

    return data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    accessToken: null,
    refreshToken: null,
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
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
