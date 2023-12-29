import React from 'react';
import styles from './ingredient-details.module.css';
import ingredientPropTypes from '@/utils/prop-types';
import Composition from './composition/composition';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { initialIngredients } from '@/services/initial-ingredients/selectors';
import { useResize } from '@/hooks/useResize';

export default function IngredientDetails() {
  const { ingredientId } = useParams();

  const { isMobile } = useResize();

  const ingredients = useSelector(initialIngredients);

  const ingredient =
    ingredients.length > 0 && ingredients.filter((item) => item._id === ingredientId)[0];

  return (
    <div className={styles.container}>
      <img
        src={`${isMobile ? ingredient.image : ingredient.image_large}`}
        alt={ingredient.name}
        className={`${styles.image} mb-4`}
      />
      <p className={`${styles.name} text text_type_main-medium mb-8`}>{ingredient.name}</p>
      <Composition card={ingredient} />
    </div>
  );
}

IngredientDetails.propTypes = {
  card: ingredientPropTypes,
};
