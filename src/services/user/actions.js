import * as api from '@/utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setRefreshToken = (data) => localStorage.setItem('refreshToken', data.refreshToken);
const setAccessToken = (data) => localStorage.setItem('accessToken', data.accessToken);
const removeRefreshToken = () => localStorage.removeItem('refreshToken');
const removeAccessToken = () => localStorage.removeItem('accessToken');

export const register = createAsyncThunk(
  'user/register-user',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const data = await api.register(name, email, password);

      setRefreshToken(data);
      setAccessToken(data);

      return data;
    } catch (error) {
      return rejectWithValue('Не получилось зарегистрироваться, попробуйте снова');
    }
  },
);

export const login = createAsyncThunk(
  'user/login-user',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await api.login(email, password);

      setRefreshToken(data);
      setAccessToken(data);

      return data;
    } catch (error) {
      return rejectWithValue('Не удалось войти в аккаунт');
    }
  },
);

export const getUser = createAsyncThunk('user/get-profile-user', async (_, { rejectWithValue }) => {
  try {
    const data = await api.getProfileUser();

    return data;
  } catch (error) {
    removeRefreshToken();
    removeAccessToken();

    return rejectWithValue('Не удалось войти в аккаунт');
  }
});

export const logout = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    await api.logout();
    removeRefreshToken();
    removeAccessToken();
  } catch (error) {
    return rejectWithValue('Не удалось выйти из аккаунта, попробуйте снова');
  }
});
