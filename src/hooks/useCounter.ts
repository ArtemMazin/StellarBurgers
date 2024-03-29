import { TIngredient } from '@/utils/types';
import { useMemo } from 'react';

function useCounter(bun: TIngredient | null, ingredients: TIngredient[], item: TIngredient) {
  const count = useMemo(
    () =>
      bun && bun._id === item._id
        ? 2
        : ingredients &&
          item &&
          [...ingredients].filter((elem: { _id: string }) => elem._id === item?._id).length,

    [bun, ingredients, item],
  );
  return count;
}

export default useCounter;
