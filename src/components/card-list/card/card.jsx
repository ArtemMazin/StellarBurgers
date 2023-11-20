import React from 'react';
import styles from './card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientPropTypes from '@/utils/prop-types';

export default function Card({ item }) {
  return (
    <div className={`${styles.card}`}>
      <Counter count={1} size="default" extraClass="" />
      <img src={item.image} alt={item.name} />
      <div className={`${styles.price} text text_type_digits-default`}>
        {item.price}
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default">{item.name}</h3>
    </div>
  );
}

Card.propTypes = {
  item: ingredientPropTypes,
};
