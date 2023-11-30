import BASE_INGREDIENTS_URL from '@/utils/constants';

function getResponseData(res) {
  if (!res.ok) {
    throw new Error('Ошибка');
  }
  return res.json();
}
async function request(url, options) {
  const res = await fetch(url, options);
  return getResponseData(res);
}

export function getIngredients() {
  return request(`${BASE_INGREDIENTS_URL}/ingredients`);
}

export function createOrder(itemsID) {
  return request(`${BASE_INGREDIENTS_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredients: itemsID }),
  });
}
