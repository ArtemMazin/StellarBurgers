import React from 'react';
import styles from './ingredient-details.module.css';
import ingredientPropTypes from '@/utils/prop-types';
import Composition from './composition/composition';

export default function IngredientDetails({ card }) {
  return (
    <div className={styles.container}>
      <img src={card.image_large} alt={card.name} className={`${styles.image} mb-4`} />
      <p className="text text_type_main-medium mb-8">{card.name}</p>
      <Composition card={card} />
    </div>
  );
}

IngredientDetails.propTypes = {
  card: ingredientPropTypes,
};
