import React, { useMemo } from 'react';

function useTotalPrice(ingredients, bun) {
  const totalPrice = useMemo(
    () =>
      ingredients &&
      ingredients.reduce((acc, item) => acc + item.price, 0) + (bun && bun.price * 2),
    [bun, ingredients],
  );

  return totalPrice;
}

export default useTotalPrice;
