import React from 'react';
import styles from './composition.module.css';
import Category from './category/category';
import { TIngredient } from '@/utils/types';

type TCompositionProps = {
  card: TIngredient;
};

export default function Composition({ card }: TCompositionProps) {
  return (
    <div className={`${styles.composition} mb-15`}>
      <Category text="Калории,ккал" value={card.calories} />
      <Category text="Белки, г" value={card.proteins} />
      <Category text="Жиры, г" value={card.fat} />
      <Category text="Углеводы, г" value={card.carbohydrates} />
    </div>
  );
}
