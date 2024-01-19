import { TIngredient } from '@/utils/types';
import { useMemo, useState } from 'react';

function useFilteredIngredients(array: TIngredient[]) {
  const [buns, setBuns] = useState<TIngredient[]>([]);
  const [sauces, setSauces] = useState<TIngredient[]>([]);
  const [main, setMain] = useState<TIngredient[]>([]);

  useMemo(() => {
    array.length > 0 &&
      array.filter((item) => {
        switch (item.type) {
          case 'bun':
            setBuns((prev) => [...prev, item]);
            break;
          case 'sauce':
            setSauces((prev) => [...prev, item]);
            break;
          case 'main':
            setMain((prev) => [...prev, item]);
            break;
        }
      });
  }, [array]);

  return { buns, sauces, main };
}

export default useFilteredIngredients;
