import { BASE_API_URL } from './constants';
import { TIngredient, TLoginSuccess } from './types';

const checkReponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

type TRequest = {
  url: string;
  options?: RequestInit;
};

async function request<T>({ url, options }: TRequest): Promise<T> {
  const res = await fetch(url, options);
  return checkReponse(res);
}

type TRefreshToken = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

export const refreshToken = async (): Promise<TRefreshToken> => {
  const res = await fetch(`${BASE_API_URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  });
  return checkReponse(res);
};

type TFetchWithRefresh = {
  url: string;
  options: RequestInit & { headers: HeadersInit & { authorization?: string } };
};

export const fetchWithRefresh = async <T>({ url, options }: TFetchWithRefresh): Promise<T> => {
  try {
    const res = await fetch(url, options);
    return await checkReponse(res);
  } catch (err) {
    if (err instanceof Object && 'message' in err && err.message === 'jwt expired') {
      const refreshData = await refreshToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem('refreshToken', refreshData.refreshToken);
      localStorage.setItem('accessToken', refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options); //повторяем запрос
      return await checkReponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

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

export function getIngredients(): Promise<{ success: boolean; data: TIngredient[] }> {
  return request({ url: `${BASE_API_URL}/ingredients` });
}

export function createOrder(itemsID: string[]): Promise<{
  name: string;
  order: {
    number: number;
  };
  success: boolean;
}> {
  return fetchWithRefresh({
    url: `${BASE_API_URL}/orders`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken') || '',
      },
      body: JSON.stringify({ ingredients: itemsID }),
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
