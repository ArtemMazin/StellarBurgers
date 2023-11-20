import { useMemo, useState } from 'react';

function useFilteredIngredients(array) {
  const [buns, setBuns] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [main, setMain] = useState([]);

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
