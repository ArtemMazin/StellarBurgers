import * as api from '@/utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setRefreshToken = (data) => localStorage.setItem('refreshToken', data.refreshToken);
const setAccessToken = (data) => localStorage.setItem('accessToken', data.accessToken);
const removeRefreshToken = () => localStorage.removeItem('refreshToken');
const removeAccessToken = () => localStorage.removeItem('accessToken');

export const register = createAsyncThunk(
  'user/register-user',
  async ({ name, email, password }) => {
    if (!name || !email || !password) throw new Error('Заполните все поля формы');
    const data = await api.register(name, email, password);

    setRefreshToken(data);
    setAccessToken(data);

    return data;
  },
);

export const login = createAsyncThunk('user/login-user', async ({ email, password }) => {
  if (!email || !password) throw new Error('Заполните все поля формы');
  const data = await api.login(email, password);

  setRefreshToken(data);
  setAccessToken(data);

  return data;
});

export const getUser = createAsyncThunk('user/get-profile-user', async (_, { rejectWithValue }) => {
  try {
    const data = await api.getProfileUser();

    return data;
  } catch (error) {
    removeRefreshToken();
    removeAccessToken();

    return rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  await api.logout();
  removeRefreshToken();
  removeAccessToken();
});
