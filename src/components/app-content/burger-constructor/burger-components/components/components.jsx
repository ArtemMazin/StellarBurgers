import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useFilteredIngredients from '@/hooks/useFilteredIngredients';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './components.module.css';
import ComponentsContext from '@/contexts/componentsContext';
import Bun from './bun.jsx/bun';
import initialIngredientsContext from '@/contexts/initialIngredientsContext';

export default function Components({ children }) {
  const initialIngredients = useContext(initialIngredientsContext);
  const { buns, sauces, main } = useFilteredIngredients(initialIngredients);

  return (
    <ComponentsContext.Provider value={{ buns, sauces, main }}>
      <div className={`${styles.components} mb-10`}>{children}</div>
    </ComponentsContext.Provider>
  );
}

Components.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]).isRequired,
};

Components.TopBun = function TopBun() {
  const { buns } = useContext(ComponentsContext);

  return <Bun array={buns} type={'top'} text={'(верх)'} />;
};

Components.BottomBun = function BottomBun() {
  const { buns } = useContext(ComponentsContext);

  return <Bun array={buns} type={'bottom'} text={'(низ)'} />;
};

Components.Ingredients = function Ingredients() {
  const { sauces, main } = useContext(ComponentsContext);

  return (
    <ul className={`${styles.list}`}>
      {sauces.map((item) => (
        <li className={styles.component} key={item._id}>
          <DragIcon type="primary" />
          <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
        </li>
      ))}
      {main.map((item) => (
        <li className={styles.component} key={item._id}>
          <DragIcon type="primary" />
          <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
        </li>
      ))}
    </ul>
  );
};
