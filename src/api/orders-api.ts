import { BASE_API_URL } from '../utils/constants';
import { fetchWithRefresh, request } from './api';
import { TOrder } from '../utils/types';

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

export function getOrder(number: string): Promise<{ success: boolean; orders: TOrder[] }> {
  return request({
    url: `${BASE_API_URL}/orders/${number}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });
}
