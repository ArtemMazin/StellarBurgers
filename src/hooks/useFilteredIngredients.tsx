import { IngredientTypes } from '@/utils/types';
import { useMemo, useState } from 'react';

function useFilteredIngredients(array: IngredientTypes[]) {
  const [buns, setBuns] = useState<IngredientTypes[]>([]);
  const [sauces, setSauces] = useState<IngredientTypes[]>([]);
  const [main, setMain] = useState<IngredientTypes[]>([]);

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
