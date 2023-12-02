import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ingredients.module.css';
import useFilteredIngredients from '@/hooks/useFilteredIngredients';
import GroupsOfIngredients from './groups-of-ingredients/groups-of-ingredients';
import { getIngredientsThunk } from '@/services/initial-ingredients/initial-ingredients-slice';
import { loadState } from '@/localstorage';
import { ingredients } from '@/services/initial-ingredients/selectors';

export default function Ingredients() {
  const initialIngredients = useSelector(ingredients);
  const { buns, sauces, main } = useFilteredIngredients(initialIngredients);

  const dispatch = useDispatch();

  useMemo(() => {
    try {
      loadState() === undefined && dispatch(getIngredientsThunk());
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

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
