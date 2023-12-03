/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientPropTypes from '@/utils/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import useCounter from '@/hooks/useCounter';
import { setCurrentIngredient } from '@/services/current-ingredient/current-ingredient-slice';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';
import useDragHook from '@/hooks/useDragHook';
import { ItemTypes, config } from '@/utils/drag-configs';

export default function Card({ item }) {
  const ingredients = useSelector(allIngredients);
  const bun = useSelector(selectedBun);

  const count = useCounter(bun, ingredients, item);

  const dispatch = useDispatch();

  const { drag, isDragging } = useDragHook(
    item,
    ItemTypes.INGREDIENT,
    config.BUN,
    config.MAIN,
    config.SAUCE,
  );

  const getStyles = (isDragging) => {
    return {
      opacity: isDragging ? 0.5 : 1,
    };
  };

  return (
    <div className={`${styles.card} p-1`} ref={drag} style={getStyles(isDragging)}>
      {count > 0 && <Counter count={count} size="default" extraClass="" />}
      <div onClick={() => dispatch(setCurrentIngredient(item))}>
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
};
