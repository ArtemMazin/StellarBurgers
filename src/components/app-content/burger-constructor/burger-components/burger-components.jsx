import useFilteredIngredients from '@/hooks/useFilteredIngredients';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-components.module.css';
import React from 'react';

function BurgerComponents() {
  const { buns, sauces, main } = useFilteredIngredients();

  return (
    <div className={styles.components}>
      <div className={styles.component}>
        {buns.length > 0 && (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${buns[0].name} (верх)`}
            price={buns[0].price}
            thumbnail={buns[0].image}
          />
        )}
      </div>

      <ul className={styles.list}>
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

      <div className={styles.component}>
        {buns.length > 0 && (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${buns[0].name} (низ)`}
            price={buns[0].price}
            thumbnail={buns[0].image}
          />
        )}
      </div>
    </div>
  );
}

export default BurgerComponents;
