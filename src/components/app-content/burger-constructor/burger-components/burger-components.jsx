import React from 'react';
import { useSelector } from 'react-redux';
import styles from './burger-components.module.css';
import useFilteredIngredients from '@/hooks/useFilteredIngredients';
import Bun from './bun/bun';
import Ingredients from './ingredients/ingredients';

export default function BurgerComponents() {
  const initialIngredients = useSelector((state) => state.entities);
  const { buns, sauces, main } = useFilteredIngredients(initialIngredients);

  return (
    <div className={`${styles.components} mb-10`}>
      <Bun array={buns} type={'top'} text={'(верх)'} />
      <Ingredients sauces={sauces} main={main} />
      <Bun array={buns} type={'bottom'} text={'(низ)'} />
    </div>
  );
}
