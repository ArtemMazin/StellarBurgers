import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';
import { TIngredient } from '@/utils/types';

type TIngredientProps = {
  ingredient?: TIngredient;
  items: TIngredient[] | null;
};

const Ingredient = ({ ingredient, items }: TIngredientProps) => {
  const count = items?.filter((item) => item._id === ingredient?._id);

  return (
    <>
      {ingredient && (
        <>
          <img
            src={ingredient.image_mobile}
            alt={ingredient.name}
            className={styles.ingredient_image}
          />
          <span className={`text text_type_main-default ${styles.ingredient_title}`}>
            {ingredient.name}
          </span>
          <div className={styles.ingredient_price}>
            <span className={`text text_type_digits-default ${styles.ingredient_count}`}>
              {count?.length} x {ingredient.price}
            </span>
            <CurrencyIcon type="primary" />
          </div>
        </>
      )}
    </>
  );
};

export default Ingredient;
