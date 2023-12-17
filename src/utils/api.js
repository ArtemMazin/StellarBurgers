import { BASE_API_URL } from './constants';

const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

async function request(url, options) {
  const res = await fetch(url, options);
  return checkReponse(res);
}

export const refreshToken = async () => {
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

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkReponse(res);
  } catch (err) {
    if (err.message === 'jwt expired') {
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

export function register(name, email, password) {
  return fetchWithRefresh(`${BASE_API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
}

export function login(email, password) {
  return fetchWithRefresh(`${BASE_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
}

export function getProfileUser() {
  return fetchWithRefresh(`${BASE_API_URL}/auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken'),
    },
  });
}

export function logout() {
  return fetchWithRefresh(`${BASE_API_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  });
}

export function getIngredients() {
  return request(`${BASE_API_URL}/ingredients`);
}

export function createOrder(itemsID) {
  return fetchWithRefresh(`${BASE_API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken'),
    },
    body: JSON.stringify({ ingredients: itemsID }),
  });
}

export function resetPassword(email) {
  return fetchWithRefresh(`${BASE_API_URL}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
}

export function restorePassword(password, token) {
  return fetchWithRefresh(`${BASE_API_URL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, token }),
  });
}
