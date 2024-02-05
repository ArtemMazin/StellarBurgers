import React from 'react';
import styles from './ingredients.module.css';
import Ingredient from './ingredient/ingredient';
import { TIngredient } from '@/utils/types';

type TIngredientsProps = {
  items: TIngredient[] | null;
};

const Ingredients = ({ items }: TIngredientsProps) => {
  const uniqItems = Array.from(new Set(items));

  return (
    <div className={`custom-scroll ${styles.ingredient_container}`}>
      <ul className={styles.ingredient_list}>
        {uniqItems?.map((ingredient, i) => (
          <li className={styles.ingredient_row} key={ingredient?.customId || i}>
            <Ingredient ingredient={ingredient} items={items} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
