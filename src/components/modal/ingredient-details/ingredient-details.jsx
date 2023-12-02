import React from 'react';
import styles from './ingredient-details.module.css';
import ingredientPropTypes from '@/utils/prop-types';
import Composition from './composition/composition';
import { useSelector } from 'react-redux';

export default function IngredientDetails() {
  const { currentIngredient } = useSelector((state) => state.currentIngredient);

  return (
    <div className={styles.container}>
      <img
        src={currentIngredient.image_large}
        alt={currentIngredient.name}
        className={`${styles.image} mb-4`}
      />
      <p className="text text_type_main-medium mb-8">{currentIngredient.name}</p>
      <Composition card={currentIngredient} />
    </div>
  );
}

IngredientDetails.propTypes = {
  card: ingredientPropTypes,
};
