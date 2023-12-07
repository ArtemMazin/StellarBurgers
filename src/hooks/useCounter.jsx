import React, { useMemo } from 'react';

function useCounter(bun, ingredients, item) {
  const count = useMemo(
    () =>
      bun && bun._id === item._id
        ? 2
        : ingredients && item && [...ingredients].filter((elem) => elem._id === item?._id).length,

    [bun, ingredients, item],
  );
  return count;
}

export default useCounter;
