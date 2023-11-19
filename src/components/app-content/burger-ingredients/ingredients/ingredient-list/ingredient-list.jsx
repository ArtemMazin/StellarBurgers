/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import IngredientsContext from '@/contexts/IngredientsContext';
import CardList from '@/components/card-list/card-list';
import styles from './ingredient-list.module.css';
import useFilteredIngredients from '@/hooks/useFilteredIngredients';

function IngedientList({ children }) {
  const { buns, sauces, main } = useFilteredIngredients();

  return (
    <IngredientsContext.Provider value={{ buns, sauces, main }}>
      <ul className={styles.list}>{children}</ul>
    </IngredientsContext.Provider>
  );
}

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
