import React from 'react';
import styles from './ingredients.module.css';
import Ingredient from './ingredient/ingredient';
import { TIngredient } from '@/utils/types';

interface IIngredients {
  ingredients: TIngredient[];
}

export default function Ingredients({ ingredients }: IIngredients) {
  return (
    <ul className={`${styles.list} custom-scroll`}>
      {ingredients.length > 0 &&
        ingredients.map((card, index) => (
          <li key={card.customId}>
            <Ingredient card={card} index={index} id={card.customId} ingredients={ingredients} />
          </li>
        ))}
    </ul>
  );
}
