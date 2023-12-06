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
          <li key={card.customId}>
            <Ingredient card={card} index={index} id={card.customId} ingredients={ingredients} />
          </li>
        ))}
    </ul>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
