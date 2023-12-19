import React from 'react';
import BurgerComponents from './burger-components/burger-components';
import BurgerOrder from './burger-order/burger-order';
import styles from './burger-constructor.module.css';
import { useResize } from '@/hooks/useResize';

function BurgerConstructor() {
  const { isMobile } = useResize();

  return (
    <section className={`${styles.container} pt-25 pl-4`}>
      {!isMobile && <BurgerComponents />}
      <BurgerOrder />
    </section>
  );
}

export default BurgerConstructor;
