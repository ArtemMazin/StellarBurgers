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
      <li>
        <GroupsOfIngredients array={buns} title={'Булки'} />
      </li>
      <li>
        <GroupsOfIngredients array={sauces} title={'Соусы'} />
      </li>
      <li>
        <GroupsOfIngredients array={main} title={'Начинки'} />
      </li>
    </ul>
  );
}
