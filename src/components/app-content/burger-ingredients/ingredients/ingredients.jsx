import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ingredients.module.css';
import useFilteredIngredients from '@/hooks/useFilteredIngredients';
import GroupsOfIngredients from './groups-of-ingredients/groups-of-ingredients';
import { getIngredientsThunk } from '@/services/initial-ingredients/initial-ingredients-slice';
import { loadState } from '@/localstorage';
import { ingredients } from '@/services/initial-ingredients/selectors';
import { BUNS, MAIN, SAUCES } from '@/utils/tabs-config';

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
      <li id={BUNS}>
        <GroupsOfIngredients array={buns} title={BUNS} />
      </li>
      <li id={SAUCES}>
        <GroupsOfIngredients array={sauces} title={SAUCES} />
      </li>
      <li id={MAIN}>
        <GroupsOfIngredients array={main} title={MAIN} />
      </li>
    </ul>
  );
}
