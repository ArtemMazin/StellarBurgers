/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styles from './ingredients.module.css';
import useFilteredIngredients from '@/hooks/useFilteredIngredients';
import initialIngredientsContext from '@/contexts/initialIngredientsContext';
import GroupsOfIngredients from './groups-of-ingredients/groups-of-ingredients';

export default function Ingredients() {
  const initialIngredients = useContext(initialIngredientsContext);
  const { buns, sauces, main } = useFilteredIngredients(initialIngredients);

  return (
    <ul className={`${styles.list} custom-scroll`}>
      <li id="Булки">
        <GroupsOfIngredients array={buns} title={'Булки'} />
      </li>
      <li id="Соусы">
        <GroupsOfIngredients array={sauces} title={'Соусы'} />
      </li>
      <li id="Начинки">
        <GroupsOfIngredients array={main} title={'Начинки'} />
      </li>
    </ul>
  );
}
