import * as api from '@/utils/api';
import { TLoginSuccess } from '@/utils/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setRefreshToken = (data: TLoginSuccess) =>
  localStorage.setItem('refreshToken', data.refreshToken);
const setAccessToken = (data: TLoginSuccess) =>
  localStorage.setItem('accessToken', data.accessToken);
const removeRefreshToken = () => localStorage.removeItem('refreshToken');
const removeAccessToken = () => localStorage.removeItem('accessToken');

export const register = createAsyncThunk(
  'user/register-user',
  async (
    { name, email, password }: { name: string; email: string; password: string },
    { rejectWithValue },
  ) => {
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
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
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

export const updateUser = createAsyncThunk(
  'user/update-profile-user',
  async (
    { name, email, password }: { name: string; email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const data = await api.updateProfileUser(name, email, password);

      return data;
    } catch (error) {
      return rejectWithValue('Не удалось обновить данные');
    }
  },
);

export const logout = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    await api.logout();
    removeRefreshToken();
    removeAccessToken();
  } catch (error) {
    return rejectWithValue('Не удалось выйти из аккаунта, попробуйте снова');
  }
});
