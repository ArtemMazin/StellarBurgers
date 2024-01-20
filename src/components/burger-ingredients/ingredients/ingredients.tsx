import React, { useRef } from 'react';
import styles from './ingredients.module.css';
import useFilteredIngredients from '@/hooks/useFilteredIngredients';
import GroupsOfIngredients from './groups-of-ingredients/groups-of-ingredients';
import { initialIngredients } from '@/services/initial-ingredients/selectors';
import { BUNS, MAIN, SAUCES } from '@/utils/tabs-config';
import { useAppSelector } from '@/redux-hooks';

type TIngredientsProps = {
  tabsRef: React.RefObject<HTMLDivElement>;
  handleTab: (value: 'Булки' | 'Соусы' | 'Начинки') => void;
  activeTab: string;
};

const Ingredients = ({ tabsRef, handleTab, activeTab }: TIngredientsProps) => {
  const ingredients = useAppSelector(initialIngredients);

  const { buns, sauces, main } = useFilteredIngredients(ingredients);

  const bunsRef = useRef<HTMLLIElement>(null);
  const saucesRef = useRef<HTMLLIElement>(null);
  const mainRef = useRef<HTMLLIElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (bunsRef.current && saucesRef.current && mainRef.current && tabsRef.current) {
      const coordinateBuns = bunsRef.current.getBoundingClientRect().top;
      const coordinateSauces = saucesRef.current.getBoundingClientRect().top;
      const coordinateMain = mainRef.current.getBoundingClientRect().top;
      const coordinateTabs = tabsRef.current.getBoundingClientRect().bottom;
      const bottomCoordinateBuns = bunsRef.current.getBoundingClientRect().bottom;

      if (
        Math.abs(coordinateBuns) - coordinateTabs < Math.abs(coordinateSauces) - coordinateTabs &&
        Math.abs(bottomCoordinateBuns) - coordinateTabs > 0
      ) {
        activeTab !== BUNS && handleTab(BUNS);
      } else if (
        Math.abs(coordinateSauces) - coordinateTabs <
        Math.abs(coordinateMain) - coordinateTabs
      ) {
        activeTab !== SAUCES && handleTab(SAUCES);
      } else {
        activeTab !== MAIN && handleTab(MAIN);
      }
    }
  };

  return (
    <ul className={`${styles.list} custom-scroll`} onScroll={(e) => handleScroll(e)}>
      <li id={BUNS} ref={bunsRef}>
        <GroupsOfIngredients ingredientsGroup={buns} title={BUNS} />
      </li>
      <li id={SAUCES} ref={saucesRef}>
        <GroupsOfIngredients ingredientsGroup={sauces} title={SAUCES} />
      </li>
      <li id={MAIN} ref={mainRef}>
        <GroupsOfIngredients ingredientsGroup={main} title={MAIN} />
      </li>
    </ul>
  );
};

export default Ingredients;
