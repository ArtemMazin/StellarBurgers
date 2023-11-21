import React from 'react';
import BurgerComponents from './burger-components/burger-components';
import BurgerOrder from './burger-order/burger-order';
import styles from './burger-constructor.module.css';

function BurgerConstructor() {
  return (
    <section className={`${styles.container} pt-25`}>
      <BurgerComponents />
      <BurgerOrder />
    </section>
  );
}

export default BurgerConstructor;
