import React from 'react';
import Components from './components/components';

function BurgerComponents() {
  return (
    <Components>
      <Components.TopBun />
      <Components.Ingredients />
      <Components.BottomBun />
    </Components>
  );
}

export default BurgerComponents;
