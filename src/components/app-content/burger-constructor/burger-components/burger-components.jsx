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

  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return (
    <div className={`${styles.components} mb-10`} ref={drop} style={{ backgroundColor }}>
      {bun ? <Bun bun={bun} type={'top'} text={'(верх)'} /> : <div>top</div>}
      <Ingredients ingredients={ingredients} />
      {bun ? <Bun bun={bun} type={'bottom'} text={'(низ)'} /> : <div>bottom</div>}
    </div>
  );
}
