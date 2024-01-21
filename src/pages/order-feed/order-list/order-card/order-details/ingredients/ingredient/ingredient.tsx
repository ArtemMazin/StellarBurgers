import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ImgPath from '@/images/bun-01.png';

const Ingredient = () => {
  return (
    <>
      <img src={ImgPath} alt="" className={styles.ingredient_image} />
      <span className={`text text_type_main-default ${styles.ingredient_title}`}>
        Флюоресцентная булка R2-D3
      </span>
      <div className={styles.ingredient_price}>
        <span className={`text text_type_digits-default ${styles.ingredient_count}`}>2 x 20</span>
        <CurrencyIcon type="primary" />
      </div>
    </>
  );
};

export default Ingredient;
