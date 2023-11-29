import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './burger-components.module.css';
import useFilteredIngredients from '@/hooks/useFilteredIngredients';
import Bun from './bun/bun';
import Ingredients from './ingredients/ingredients';
import { addIngredient, chooseBun } from '@/services/constructor-slice';
import { useDrop } from 'react-dnd';

export default function BurgerComponents() {
  const { bun, ingredients } = useSelector((state) => state.constructorIngredients);

  const dispatch = useDispatch();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'box',
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
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
