import { TIngredient } from '@/utils/types';
import React, { useMemo } from 'react';

function useCounter(bun: TIngredient, ingredients: TIngredient[], item: TIngredient) {
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
