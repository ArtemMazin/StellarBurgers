import React from 'react';
import styles from './app-content.module.css';
import BurgerIngredients from './burger-ingredients/burger-ingredients';
import BurgerConstructor from './burger-constructor/burger-constructor';

function AppContent() {
  return (
    <main className={`${styles.content} container pl-5 pr-5`}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
}

export default AppContent;
