import React from 'react';
import PropTypes from 'prop-types';
import Card from './card/card';
import styles from './card-list.module.css';
import Modal from '../modal/modal';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import ingredientPropTypes from '@/utils/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeCurrentIngredient } from '@/services/current-ingredient/current-ingredient-slice';
import { currentIngredient } from '@/services/current-ingredient/selecrors';

export default function CardList({ array }) {
  const ingredient = useSelector(currentIngredient);

  const dispatch = useDispatch();

  return (
    <>
      <ul className={`${styles.list} pl-3 pr-4 pt-6`}>
        {array.length > 0 &&
          array.map((item) => (
            <li key={item._id}>
              <Card item={item} />
            </li>
          ))}
      </ul>
      {ingredient && (
        <Modal onClose={() => dispatch(removeCurrentIngredient())} title={'Детали ингредиента'}>
          <IngredientDetails />
        </Modal>
      )}
    </>
  );
}

CardList.propTypes = {
  array: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
