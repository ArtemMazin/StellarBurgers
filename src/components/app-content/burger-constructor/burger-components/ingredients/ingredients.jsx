/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredients.module.css';
import ingredientPropTypes from '@/utils/prop-types';
import { deleteIngredient } from '@/services/constructor/constructor-slice';
import { useDispatch } from 'react-redux';

export default function Ingredients({ ingredients }) {
  const dispatch = useDispatch();
  return (
    <ul className={`${styles.list} custom-scroll`}>
      {ingredients.length > 0 &&
        ingredients.map((item) => (
          <li className={`${styles.component} pl-3 pr-2`} key={item.customId}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
              handleClose={() => dispatch(deleteIngredient(item.customId))}
            />
          </li>
        ))}
    </ul>
  );
}

Ingredients.propTypes = {
  sauces: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  main: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
