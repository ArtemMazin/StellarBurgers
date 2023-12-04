import React, { useEffect, useRef } from 'react';
import Tabs from './tabs/tabs';
import Ingredients from './ingredients/ingredients';

function BurgerIngredients() {
  const tabsRef = useRef(null);

  return (
    <section>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <Tabs ref={tabsRef} />
      <Ingredients tabsRef={tabsRef} />
    </section>
  );
}

export default BurgerIngredients;
