import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ingredients.module.css';
import useFilteredIngredients from '@/hooks/useFilteredIngredients';
import GroupsOfIngredients from './groups-of-ingredients/groups-of-ingredients';
import {
  initialIngredients,
  statusIngredients,
  errorIngredients,
} from '@/services/initial-ingredients/selectors';
import { BUNS, MAIN, SAUCES } from '@/utils/tabs-config';
import { getIngredients } from '@/services/initial-ingredients/initial-ingredients-slice';
import Preloader from '@/components/preloader/preloader';

const Ingredients = ({ tabsRef, handleTab, activeTab }) => {
  const ingredients = useSelector(initialIngredients);
  const status = useSelector(statusIngredients);
  const error = useSelector(errorIngredients);

  const dispatch = useDispatch();

  const { buns, sauces, main } = useFilteredIngredients(ingredients);

  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const mainRef = useRef(null);

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

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getIngredients());
    }
  }, [dispatch, status]);

  let content;
  if (status === 'loading') {
    content = (
      <li>
        <Preloader />
      </li>
    );
  } else if (status === 'succeeded') {
    content = (
      <>
        <li id={BUNS} ref={bunsRef}>
          <GroupsOfIngredients ingredientsGroup={buns} title={BUNS} />
        </li>
        <li id={SAUCES} ref={saucesRef}>
          <GroupsOfIngredients ingredientsGroup={sauces} title={SAUCES} />
        </li>
        <li id={MAIN} ref={mainRef}>
          <GroupsOfIngredients ingredientsGroup={main} title={MAIN} />
        </li>
      </>
    );
  } else if (status === 'failed') {
    content = <li>{error}</li>;
  }

  return (
    <ul className={`${styles.list} custom-scroll`} onScroll={(e) => handleScroll(e)}>
      {content}
    </ul>
  );
};

export default Ingredients;

Ingredients.propTypes = {
  tabsRef: PropTypes.object.isRequired,
  handleTab: PropTypes.func.isRequired,
  activeTab: PropTypes.oneOf([BUNS, MAIN, SAUCES]),
};
