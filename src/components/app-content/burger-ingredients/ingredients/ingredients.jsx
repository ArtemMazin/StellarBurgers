/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ingredients.module.css';
import useFilteredIngredients from '@/hooks/useFilteredIngredients';
import GroupsOfIngredients from './groups-of-ingredients/groups-of-ingredients';
import { getIngredientsThunk } from '@/services/initial-ingredients/initial-ingredients-slice';
import { loadState } from '@/localstorage';
import { ingredients } from '@/services/initial-ingredients/selectors';
import { BUNS, MAIN, SAUCES } from '@/utils/tabs-config';

const Ingredients = React.forwardRef(({ tabsRef, handleTab, activeTab }) => {
  const initialIngredients = useSelector(ingredients);
  const { buns, sauces, main } = useFilteredIngredients(initialIngredients);

  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const mainRef = useRef(null);

  const dispatch = useDispatch();

  useMemo(() => {
    try {
      loadState() === undefined && dispatch(getIngredientsThunk());
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  const handleScroll = (e) => {
    e.stopPropagation();
    e.preventDefault();

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
  };

  return (
    <ul className={`${styles.list} custom-scroll`} onScroll={(e) => handleScroll(e)}>
      <li id={BUNS} ref={bunsRef}>
        <GroupsOfIngredients array={buns} title={BUNS} />
      </li>
      <li id={SAUCES} ref={saucesRef}>
        <GroupsOfIngredients array={sauces} title={SAUCES} />
      </li>
      <li id={MAIN} ref={mainRef}>
        <GroupsOfIngredients array={main} title={MAIN} />
      </li>
    </ul>
  );
});

export default Ingredients;
