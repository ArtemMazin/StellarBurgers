import React, { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './burger-components.module.css';
import Bun from './bun/bun';
import Ingredients from './ingredients/ingredients';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';
import useDropHook from '@/hooks/useDropHook';
import { ItemTypes } from '@/utils/drag-configs';
import { useDrop } from 'react-dnd';

export default function BurgerComponents() {
  const bun = useSelector(selectedBun);
  const ingredients = useSelector(allIngredients);

  const { drop, isActive, canDrop } = useDropHook(ItemTypes.INGREDIENT);

  // let backgroundColor = '#222';
  // if (isActive) {
  //   backgroundColor = 'darkgreen';
  // } else if (canDrop) {
  //   backgroundColor = 'darkkhaki';
  // }

  return (
    <div className={`${styles.components} mb-10`} ref={drop}>
      {bun ? (
        <Bun bun={bun} type={'top'} text={'(верх)'} />
      ) : (
        <div className={`${styles.fakeComponent} ${styles.fakeComponent_top} ml-8 mr-3`}></div>
      )}
      {ingredients.length > 0 ? (
        <Ingredients ingredients={ingredients} />
      ) : (
        <div className={`${styles.fakeComponent} ml-8 mr-3`}></div>
      )}
      {bun ? (
        <Bun bun={bun} type={'bottom'} text={'(низ)'} />
      ) : (
        <div className={`${styles.fakeComponent} ${styles.fakeComponent_bottom} ml-8 mr-3`}></div>
      )}
    </div>
  );
}
