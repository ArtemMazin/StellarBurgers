/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientPropTypes from '@/utils/prop-types';
import { useDrag } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient, chooseBun } from '@/services/constructor-slice';
import useCounter from '@/hooks/useCounter';

export default function Card({ item, handleOpen }) {
  const { bun, ingredients } = useSelector((state) => state.constructorIngredients);
  const count = useCounter(bun, ingredients, item);

  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: item._id,
    end: (elem, monitor) => {
      const dropResult = monitor.getDropResult();
      if (elem && item.type === 'bun' && dropResult) {
        dispatch(chooseBun(item));
      }
      if (elem && item.type !== 'bun' && dropResult) {
        dispatch(addIngredient(item));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;

  return (
    <div className={`${styles.card}`} ref={drag} style={{ opacity }}>
      {count > 0 && <Counter count={count} size="default" extraClass="" />}
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
  item: ingredientPropTypes.isRequired,
  handleOpen: PropTypes.func.isRequired,
};
