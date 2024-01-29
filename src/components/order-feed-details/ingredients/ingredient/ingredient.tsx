import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';
import { TIngredient } from '@/utils/types';

type TIngredientProps = {
  ingredient?: TIngredient;
};

const Ingredient = ({ ingredient }: TIngredientProps) => {
  return (
    <>
      <img
        src={ingredient?.image_mobile}
        alt={ingredient?.name}
        className={styles.ingredient_image}
      />
      <span className={`text text_type_main-default ${styles.ingredient_title}`}>
        {ingredient?.name}
      </span>
      <div className={styles.ingredient_price}>
        <span className={`text text_type_digits-default ${styles.ingredient_count}`}>2 x 20</span>
        <CurrencyIcon type="primary" />
      </div>
    </>
  );
};

export default Ingredient;
