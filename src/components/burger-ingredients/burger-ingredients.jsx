import React, { useEffect, useRef, useState } from 'react';
import Tabs from './tabs/tabs';
import Ingredients from './ingredients/ingredients';
import { BUNS } from '@/utils/tabs-config';
import useStatus from '@/hooks/useStatus';
import Preloader from '../preloader/preloader';
import { useDispatch, useSelector } from 'react-redux';
import { errorIngredients, statusIngredients } from '@/services/initial-ingredients/selectors';
import { getIngredients } from '@/services/initial-ingredients/initial-ingredients-slice';

function BurgerIngredients() {
  const [activeTab, setActiveTab] = useState(BUNS);

  const status = useSelector(statusIngredients);
  const error = useSelector(errorIngredients);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getIngredients());
    }
  }, [dispatch, status]);

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };
  const tabsRef = useRef(null);

  const content = useStatus(
    <div className="mt-30">
      <Preloader />
    </div>,
    <Ingredients tabsRef={tabsRef} handleTab={handleTab} activeTab={activeTab} />,
    status,
    error,
  );

  return (
    <section>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <Tabs ref={tabsRef} handleTab={handleTab} activeTab={activeTab} />
      {content}
    </section>
  );
}

export default BurgerIngredients;
