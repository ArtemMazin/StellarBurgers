import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ingredients.module.css';
import useFilteredIngredients from '@/hooks/useFilteredIngredients';
import GroupsOfIngredients from './groups-of-ingredients/groups-of-ingredients';
import { getIngredientsThunk } from '@/services/initial-ingredients/initial-ingredients-slice';
import { loadState } from '@/localstorage';
import { ingredients, error } from '@/services/initial-ingredients/selectors';
import { BUNS, MAIN, SAUCES } from '@/utils/tabs-config';

const Ingredients = ({ tabsRef, handleTab, activeTab }) => {
  const initialIngredients = useSelector(ingredients);
  const initialIngredientsError = useSelector(error);
  const { buns, sauces, main } = useFilteredIngredients(initialIngredients);

  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const mainRef = useRef(null);

  const dispatch = useDispatch();

  useMemo(() => {
    if (loadState() === undefined || initialIngredientsError) {
      dispatch(getIngredientsThunk())
        .unwrap()
        .catch((error) => console.error(error));
    }
  }, [dispatch, initialIngredientsError]);

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

Ingredients.propTypes = {
  tabsRef: PropTypes.object.isRequired,
  handleTab: PropTypes.func.isRequired,
  activeTab: PropTypes.oneOf([BUNS, MAIN, SAUCES]),
};