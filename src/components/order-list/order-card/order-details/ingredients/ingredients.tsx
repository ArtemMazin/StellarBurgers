import React from 'react';
import styles from './ingredients.module.css';
import Ingredient from './ingredient/ingredient';

const Ingredients = () => {
  return (
    <div className={`custom-scroll ${styles.ingredient_container}`}>
      <ul className={styles.ingredient_list}>
        <li className={styles.ingredient_row}>
          <Ingredient />
        </li>
        <li className={styles.ingredient_row}>
          <Ingredient />
        </li>
        <li className={styles.ingredient_row}>
          <Ingredient />
        </li>
        <li className={styles.ingredient_row}>
          <Ingredient />
        </li>
        <li className={styles.ingredient_row}>
          <Ingredient />
        </li>
      </ul>
    </div>
  );
};

export default Ingredients;
