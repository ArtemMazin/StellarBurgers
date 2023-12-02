import React from 'react';
import { useSelector } from 'react-redux';
import styles from './burger-components.module.css';
import Bun from './bun/bun';
import Ingredients from './ingredients/ingredients';
import { useDrop } from 'react-dnd';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';

export default function BurgerComponents() {
  const bun = useSelector(selectedBun);
  const ingredients = useSelector(allIngredients);

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
