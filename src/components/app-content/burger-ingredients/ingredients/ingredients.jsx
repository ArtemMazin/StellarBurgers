import React from 'react';
import IngedientList from './ingredient-list/ingredient-list';

function Ingredients() {
  return (
    <IngedientList>
      <li>
        <ul>
          <h2>Булки</h2>
          <IngedientList.Buns />
        </ul>
      </li>
      <li>
        <ul>
          <h2>Соусы</h2>
          <IngedientList.Sauces />
        </ul>
      </li>
      <li>
        <ul>
          <h2>Начинки</h2>
          <IngedientList.Main />
        </ul>
      </li>
    </IngedientList>
  );
}

export default Ingredients;
