import { BASE_API_URL } from '../utils/constants';

export const checkReponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

type TRequest = {
  url: string;
  options?: RequestInit;
};

export async function request<T>({ url, options }: TRequest): Promise<T> {
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
