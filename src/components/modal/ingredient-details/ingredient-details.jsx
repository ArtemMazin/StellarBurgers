import React from 'react';
import styles from './ingredient-details.module.css';
import ingredientPropTypes from '@/utils/prop-types';
import Composition from './composition/composition';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { initialIngredients } from '@/services/initial-ingredients/selectors';

export default function IngredientDetails() {
  const { ingredientId } = useParams();

  const ingredients = useSelector(initialIngredients);
  const ingredient = ingredients.filter((item) => item._id === ingredientId)[0];

  return (
    <div className={styles.container}>
      <img src={ingredient.image_large} alt={ingredient.name} className={`${styles.image} mb-4`} />
      <p className="text text_type_main-medium mb-8">{ingredient.name}</p>
      <Composition card={ingredient} />
    </div>
  );
}

IngredientDetails.propTypes = {
  card: ingredientPropTypes,
};
