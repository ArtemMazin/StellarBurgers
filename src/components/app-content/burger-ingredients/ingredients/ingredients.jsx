import React from 'react';
import IngedientList from './ingredient-list/ingredient-list';
import styles from './ingredients.module.css';

function Ingredients() {
  return (
    <IngedientList>
      <li>
        <ul className={`${styles.ingredients} mb-10`}>
          <h2 className="text text_type_main-medium">Булки</h2>
          <IngedientList.Buns />
        </ul>
      </li>
      <li>
        <ul className={`${styles.ingredients} mb-10`}>
          <h2 className="text text_type_main-medium">Соусы</h2>
          <IngedientList.Sauces />
        </ul>
      </li>
      <li>
        <ul className={`${styles.ingredients} mb-10`}>
          <h2 className="text text_type_main-medium">Начинки</h2>
          <IngedientList.Main />
        </ul>
      </li>
    </IngedientList>
  );
}

export default Ingredients;
