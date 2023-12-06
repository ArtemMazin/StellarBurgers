import React from 'react';
import { useSelector } from 'react-redux';
import styles from './burger-components.module.css';
import Bun from './bun/bun';
import Ingredients from './ingredients/ingredients';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';
import { ItemTypes } from '@/utils/drag-configs';
import Base from './base/base';
import { useDrop } from 'react-dnd';

export default function BurgerComponents() {
  const bun = useSelector(selectedBun);
  const ingredients = useSelector(allIngredients);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.INGREDIENT,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  return (
    <div className={`${styles.components} mb-10`} ref={drop}>
      {bun ? (
        <Bun bun={bun} type={'top'} text={'(верх)'} />
      ) : (
        <Base styleType={'top'} canDrop={canDrop} />
      )}
      {ingredients.length > 0 ? (
        <Ingredients ingredients={ingredients} />
      ) : (
        <Base canDrop={canDrop} />
      )}
      {bun ? (
        <Bun bun={bun} type={'bottom'} text={'(низ)'} />
      ) : (
        <Base styleType={'bottom'} canDrop={canDrop} />
      )}
    </div>
  );
}
