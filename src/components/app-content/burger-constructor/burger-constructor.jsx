import React from 'react';
import BurgerComponents from './burger-components/burger-components';
import BurgerOrder from './burger-order/burger-order';

function BurgerConstructor() {
  return (
    <section className="pt-25">
      <BurgerComponents />
      <BurgerOrder />
    </section>
  );
}

export default BurgerConstructor;
