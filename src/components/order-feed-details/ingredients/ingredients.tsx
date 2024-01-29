import React from 'react';
import styles from './ingredients.module.css';
import Ingredient from './ingredient/ingredient';
import { TIngredient } from '@/utils/types';

type TIngredientsProps = {
  items: (TIngredient | undefined)[] | null;
};

const Ingredients = ({ items }: TIngredientsProps) => {
  return (
    <div className={`custom-scroll ${styles.ingredient_container}`}>
      <ul className={styles.ingredient_list}>
        {items
          ?.map((ingredient, i) => (
            <li className={styles.ingredient_row} key={ingredient?.customId || i}>
              <Ingredient ingredient={ingredient} />
            </li>
          ))
          .reverse()}
      </ul>
    </div>
  );
};

export default Ingredients;
