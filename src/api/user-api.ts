import { TLoginSuccess } from '@/utils/types';
import { fetchWithRefresh, request } from './api';
import { BASE_API_URL } from '@/utils/constants';

export function register(name: string, email: string, password: string): Promise<TLoginSuccess> {
  return request({
    url: `${BASE_API_URL}/auth/register`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    },
  });
}

export function login(email: string, password: string): Promise<TLoginSuccess> {
  return request({
    url: `${BASE_API_URL}/auth/login`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    },
  });
}

export function getProfileUser(): Promise<Pick<TLoginSuccess, 'success' | 'user'>> {
  return fetchWithRefresh({
    url: `${BASE_API_URL}/auth/user`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken') || '',
      },
    },
  });
}

export function updateProfileUser(
  name: string,
  email: string,
  password: string,
): Promise<Pick<TLoginSuccess, 'success' | 'user'>> {
  return fetchWithRefresh({
    url: `${BASE_API_URL}/auth/user`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken') || '',
      },
      body: JSON.stringify({ name, email, password }),
    },
  });
}

export function logout(): Promise<{ success: boolean; message: string }> {
  return fetchWithRefresh({
    url: `${BASE_API_URL}/auth/logout`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken'),
      }),
    },
  });
}

export function resetPassword(email: string): Promise<{ success: boolean; message: string }> {
  return request({
    url: `${BASE_API_URL}/password-reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    },
  });
}

export function restorePassword(
  password: string,
  token: string,
): Promise<{ success: boolean; message: string }> {
  return request({
    url: `${BASE_API_URL}/password-reset/reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, token }),
    },
  });
}
