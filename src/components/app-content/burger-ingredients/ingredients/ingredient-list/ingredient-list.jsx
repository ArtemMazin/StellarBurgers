/* eslint-disable react/prop-types */
import React, { useContext, useMemo, useState } from 'react';
import DATA from '@/utils/data';
import IngredientsContext from '@/contexts/IngredientsContext';
import CardList from '@/components/card-list/card-list';
import styles from './ingredient-list.module.css';

function IngedientList({ children }) {
  const [buns, setBuns] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [main, setMain] = useState([]);

  useMemo(() => {
    DATA.filter((item) => {
      switch (item.type) {
        case 'bun':
          setBuns((prev) => [...prev, item]);
          break;
        case 'sauce':
          setSauces((prev) => [...prev, item]);
          break;
        case 'main':
          setMain((prev) => [...prev, item]);
          break;
      }
    });
  }, []);

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
