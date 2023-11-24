import React from 'react';
import Tabs from './tabs/tabs';
import Ingredients from './ingredients/ingredients';

function BurgerIngredients() {
  return (
    <section>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <Tabs />
      <Ingredients />
    </section>
  );
}

export default BurgerIngredients;
