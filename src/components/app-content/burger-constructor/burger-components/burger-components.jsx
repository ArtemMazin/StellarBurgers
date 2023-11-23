import React, { useContext } from 'react';
import styles from './burger-components.module.css';
import initialIngredientsContext from '@/contexts/initialIngredientsContext';
import useFilteredIngredients from '@/hooks/useFilteredIngredients';
import Bun from './bun/bun';
import Ingredients from './ingredients/ingredients';

export default function BurgerComponents() {
  const initialIngredients = useContext(initialIngredientsContext);
  const { buns, sauces, main } = useFilteredIngredients(initialIngredients);

  return (
    <div className={`${styles.components} mb-10`}>
      <Bun array={buns} type={'top'} text={'(верх)'} />
      <Ingredients sauces={sauces} main={main} />
      <Bun array={buns} type={'bottom'} text={'(низ)'} />
    </div>
  );
}
