import { TIngredient } from '@/utils/types';
import { useMemo } from 'react';

function useTotalPrice(ingredients: TIngredient[], bun: TIngredient | null) {
  const totalPrice = useMemo(
    () =>
      ingredients && bun && ingredients.reduce((acc, item) => acc + item.price, 0) + bun.price * 2,
    [bun, ingredients],
  );

  return totalPrice;
}

export default useTotalPrice;
