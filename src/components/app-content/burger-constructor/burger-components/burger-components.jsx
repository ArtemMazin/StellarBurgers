import React, { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './burger-components.module.css';
import Bun from './bun/bun';
import Ingredients from './ingredients/ingredients';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';
import useDropHook from '@/hooks/useDropHook';
import { ItemTypes } from '@/utils/drag-configs';
import { useDrop } from 'react-dnd';
import Base from './base/base';

export default function BurgerComponents() {
  const bun = useSelector(selectedBun);
  const ingredients = useSelector(allIngredients);

  const { drop } = useDropHook(ItemTypes.INGREDIENT);

  return (
    <div className={`${styles.components} mb-10`} ref={drop}>
      {bun ? <Bun bun={bun} type={'top'} text={'(верх)'} /> : <Base styleType={'top'} />}
      {ingredients.length > 0 ? <Ingredients ingredients={ingredients} /> : <Base />}
      {bun ? <Bun bun={bun} type={'bottom'} text={'(низ)'} /> : <Base styleType={'bottom'} />}
    </div>
  );
}
