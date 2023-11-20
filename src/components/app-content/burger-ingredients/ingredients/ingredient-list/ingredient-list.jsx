import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IngredientsContext from '@/contexts/ingredientsContext';
import CardList from '@/components/card-list/card-list';
import styles from './ingredient-list.module.css';
import useFilteredIngredients from '@/hooks/useFilteredIngredients';
import initialIngredientsContext from '@/contexts/initialIngredientsContext';

function IngedientList({ children }) {
  const initialIngredients = useContext(initialIngredientsContext);
  const { buns, sauces, main } = useFilteredIngredients(initialIngredients);

  return (
    <IngredientsContext.Provider value={{ buns, sauces, main }}>
      <ul className={`${styles.list} custom-scroll`}>{children}</ul>
    </IngredientsContext.Provider>
  );
}

IngedientList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]).isRequired,
};

IngedientList.Buns = function Buns() {
  const { buns } = useContext(IngredientsContext);

  return <CardList array={buns} />;
};

IngedientList.Sauces = function Sauces() {
  const { sauces } = useContext(IngredientsContext);

  return <CardList array={sauces} />;
};

IngedientList.Main = function Main() {
  const { main } = useContext(IngredientsContext);

  return <CardList array={main} />;
};

export default IngedientList;
