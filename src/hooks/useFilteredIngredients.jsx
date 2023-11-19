import DATA from '@/utils/data';
import React, { useMemo, useState } from 'react';

function useFilteredIngredients() {
  const [buns, setBuns] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [main, setMain] = useState([]);

  useMemo(() => {
    DATA.filter((item) => {
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
  }, []);

  return { buns, sauces, main };
}

export default useFilteredIngredients;
