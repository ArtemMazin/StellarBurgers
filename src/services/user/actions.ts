import * as api from '@/utils/api';
import { TLoginSuccess, TUser } from '@/utils/types';
import { createAsyncThunk, ThunkAction } from '@reduxjs/toolkit';
import { setAuthChecked, setUser } from '@/services/user/user-slice';
import { RootState } from '@/store';

const setRefreshToken = (data: TLoginSuccess) =>
  localStorage.setItem('refreshToken', data.refreshToken);
const setAccessToken = (data: TLoginSuccess) =>
  localStorage.setItem('accessToken', data.accessToken);
const removeRefreshToken = () => localStorage.removeItem('refreshToken');
const removeAccessToken = () => localStorage.removeItem('accessToken');

export const register = createAsyncThunk<TLoginSuccess, TUser>(
  'user/register-user',
  async (
    { name, email, password },
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

export const login = createAsyncThunk<TLoginSuccess, Omit<TUser, 'name'>>(
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


export const getUser = (): ThunkAction<Promise<void>, RootState, unknown, ReturnType<typeof setUser>> => {
  return (dispatch) => {
    return api.getProfileUser().then((res) => {
      dispatch(setUser(res.user));
    });
  };
};

export const updateUser = createAsyncThunk<Pick<TLoginSuccess, 'success' | 'user'>, TUser>(
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

export const checkUserAuth = (): ThunkAction<void, RootState, unknown, ReturnType<typeof setUser | typeof setAuthChecked>> => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
        .catch(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch(setUser(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
    }
  };
};
