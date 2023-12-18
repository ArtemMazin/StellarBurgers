import IngredientDetails from '@/components/modal/ingredient-details/ingredient-details';
import styles from './ingredient.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '@/services/initial-ingredients/initial-ingredients-slice';
import { toast } from 'react-toastify';
import { loadState } from '@/localstorage';
import { errorIngredients } from '@/services/initial-ingredients/selectors';

function Ingredient() {
  const dispatch = useDispatch();

  const error = useSelector(errorIngredients);

  useEffect(() => {
    if (loadState() === undefined || error) {
      dispatch(getIngredients())
        .unwrap()
        .catch((err) => {
          toast.error(err);
        });
    }
  }, [dispatch, error]);

  return (
    <div className="mt-30">
      <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2>
      <IngredientDetails />
    </div>
  );
}

export default Ingredient;
