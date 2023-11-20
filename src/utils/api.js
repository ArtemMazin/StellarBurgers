import URL from '@/utils/constants';

function getResponseData(res) {
  if (!res.ok) {
    throw new Error('Ошибка');
  }
  return res.json();
}
async function request(url) {
  const res = await fetch(url);
  return getResponseData(res);
}

export default function getIngredients() {
  return request(URL);
}
