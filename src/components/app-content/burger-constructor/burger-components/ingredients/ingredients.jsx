/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredients.module.css';
import ingredientPropTypes from '@/utils/prop-types';
import Ingredient from './ingredient/ingredient';

export default function Ingredients({ ingredients }) {
  return (
    <ul className={`${styles.list} custom-scroll`}>
      {ingredients.length > 0 &&
        ingredients.map((card, index) => (
          <li className="p-2" key={card.customId}>
            <Ingredient card={card} index={index} id={card.customId} ingredients={ingredients} />
          </li>
        ))}
    </ul>
  );
}

Ingredients.propTypes = {
  sauces: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  main: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
