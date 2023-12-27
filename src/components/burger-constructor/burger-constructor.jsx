import React from 'react';
import BurgerComponents from './burger-components/burger-components';
import BurgerOrder from './burger-order/burger-order';
import { useResize } from '@/hooks/useResize';

function BurgerConstructor() {
  const { isMobile } = useResize();

  return (
    <section className={`${isMobile ? 'pl-2' : 'pt-25 pl-4'}`}>
      <BurgerComponents />
      <BurgerOrder />
    </section>
  );
}

export default BurgerConstructor;
