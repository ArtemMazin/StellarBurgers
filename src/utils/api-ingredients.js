import { BASE_API_URL } from '@/utils/constants';

const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

async function request(url, options) {
  const res = await fetch(url, options);
  return checkReponse(res);
}

export function getIngredients() {
  return request(`${BASE_API_URL}/ingredients`);
}

export function createOrder(itemsID) {
  return request(`${BASE_API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredients: itemsID }),
  });
}
