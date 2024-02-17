import React from 'react';
import styles from './ingredient-details.module.css';
import Composition from './composition/composition';
import { useParams } from 'react-router';
import { initialIngredients } from '@/services/initial-ingredients/selectors';
import { useResize } from '@/hooks/useResize';
import { TIngredient } from '@/utils/types';
import { useAppSelector } from '@/redux-hooks';

export default function IngredientDetails() {
  const { ingredientId } = useParams();

  const { isMobile } = useResize();

  const ingredients = useAppSelector(initialIngredients);

  const ingredient =
    ingredients.length > 0
      ? ingredients.filter((item: TIngredient) => item._id === ingredientId)[0]
      : null;

  return (
    ingredient && (
      <div className={styles.container} data-test="modal-ingredient">
        <img
          src={`${isMobile ? ingredient.image : ingredient.image_large}`}
          alt={ingredient.name}
          className={`${styles.image} mb-4`}
        />
        <p className={`${styles.name} text text_type_main-medium mb-8`}>{ingredient.name}</p>
        <Composition card={ingredient} />
      </div>
    )
  );
}
