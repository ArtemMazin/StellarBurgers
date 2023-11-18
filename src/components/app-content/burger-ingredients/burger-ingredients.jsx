import React from 'react';
import styles from './burger-ingredients.module.css';
import Tabs from './tabs/tabs';
import Ingredients from './ingredients/ingredients';

function BurgerIngredients() {
  return (
    <section className={styles.ingredients}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <Tabs />
      <Ingredients />
    </section>
  );
}

export default BurgerIngredients;
