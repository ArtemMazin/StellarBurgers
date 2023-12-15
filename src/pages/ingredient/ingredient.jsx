import IngredientDetails from '@/components/modal/ingredient-details/ingredient-details';
import styles from './ingredient.module.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getIngredients } from '@/services/initial-ingredients/initial-ingredients-slice';

function Ingredient() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className="mt-30">
      <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2>
      <IngredientDetails />
    </div>
  );
}

export default Ingredient;
