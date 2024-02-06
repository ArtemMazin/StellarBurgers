import React, { useEffect, useRef, useState } from 'react';
import Tabs from './tabs/tabs';
import Ingredients from './ingredients/ingredients';
import { BUNS } from '@/utils/tabs-config';
import useStatus from '@/hooks/useStatus';
import Preloader from '../preloader/preloader';
import { errorIngredients, statusIngredients } from '@/services/initial-ingredients/selectors';
import { getIngredients } from '@/services/initial-ingredients/initial-ingredients-slice';
import { toast } from 'react-toastify';
import { loadState } from '@/localstorage';
import { useResize } from '@/hooks/useResize';
import styles from './burger-ingredients.module.css';
import { useAppDispatch, useAppSelector } from '@/redux-hooks';

function BurgerIngredients() {
  const [activeTab, setActiveTab] = useState<string>(BUNS);
  const status = useAppSelector(statusIngredients);
  const error = useAppSelector(errorIngredients);
  const { isMobile } = useResize();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loadState() === undefined || error) {
      dispatch(getIngredients())
        .unwrap()
        .catch((err: unknown) => {
          if (err instanceof Error) {
            toast.error(err.message);
          }
        });
    }
  }, [dispatch, error]);

  const handleTab = (tabName: string) => {
    setActiveTab(tabName);
  };
  const tabsRef = useRef<HTMLDivElement>(null);

  const content = useStatus({
    loading: (
      <div className="mt-30">
        <Preloader />
      </div>
    ),
    content: <Ingredients tabsRef={tabsRef} handleTab={handleTab} activeTab={activeTab} />,
    status,
  });

  return (
    <section>
      <h1
        className={`text text_type_main-large ${styles.title} ${
          isMobile ? 'pt-4 pb-2' : 'pt-10 pb-5'
        }`}
      >
        Соберите бургер
      </h1>
      <Tabs ref={tabsRef} handleTab={handleTab} activeTab={activeTab} />
      {content}
    </section>
  );
}

export default BurgerIngredients;
