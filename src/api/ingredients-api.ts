import { BASE_API_URL } from '@/utils/constants';
import { TIngredient } from '@/utils/types';
import { request } from './api';

export function getIngredients(): Promise<{ success: boolean; data: TIngredient[] }> {
  return request({ url: `${BASE_API_URL}/ingredients` });
}
