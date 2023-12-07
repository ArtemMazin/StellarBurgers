import React, { useRef, useState } from 'react';
import Tabs from './tabs/tabs';
import Ingredients from './ingredients/ingredients';
import { BUNS } from '@/utils/tabs-config';

function BurgerIngredients() {
  const [activeTab, setActiveTab] = useState(BUNS);

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };
  const tabsRef = useRef(null);

  return (
    <section>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <Tabs ref={tabsRef} handleTab={handleTab} activeTab={activeTab} />
      <Ingredients tabsRef={tabsRef} handleTab={handleTab} activeTab={activeTab} />
    </section>
  );
}

export default BurgerIngredients;
