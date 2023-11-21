/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientPropTypes from '@/utils/prop-types';

export default function Card({ item, handleOpen }) {
  return (
    <div className={`${styles.card}`}>
      <Counter count={1} size="default" extraClass="" />
      <div onClick={() => handleOpen(item)}>
        <img src={item.image} alt={item.name} />
      </div>
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
