import React, { useMemo } from 'react';
import styles from './ingredients.module.css';
import Ingredient from './ingredient/ingredient';
import { TIngredient } from '@/utils/types';

type TIngredientsProps = {
  items: TIngredient[] | null;
};

const Ingredients = ({ items }: TIngredientsProps) => {
  const uniqItems = useMemo(() => {
    const uniqIngredients = Array.from(new Set(items));

    if (!uniqIngredients.length) return [];

    return uniqIngredients.map((ingredient) => {
      const count = items?.filter((item) => item._id === ingredient._id).length;

      return { ...ingredient, count };
    });
  }, [items]);

  return (
    <div className={`custom-scroll ${styles.ingredient_container}`}>
      <ul className={styles.ingredient_list}>
        {uniqItems?.map((ingredient, i) => (
          <li className={styles.ingredient_row} key={ingredient?.customId || i}>
            <Ingredient ingredient={ingredient} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
