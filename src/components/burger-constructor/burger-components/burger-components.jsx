import React from 'react';
import { useSelector } from 'react-redux';
import styles from './burger-components.module.css';
import Bun from './bun/bun';
import Ingredients from './ingredients/ingredients';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';
import { ItemTypes } from '@/utils/drag-configs';
import Base from './base/base';
import { useDrop } from 'react-dnd';
import Switch from './switch-components/switch-components';

export default function BurgerComponents() {
  const bun = useSelector(selectedBun);
  const ingredients = useSelector(allIngredients);

  const [{ canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.INGREDIENT,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div className={`${styles.components} mb-10`} ref={drop}>
      {
        <Switch element={bun}>
          <Bun bun={bun} type={'top'} text={'(верх)'} />
          <Base styleType={'top'} canDrop={canDrop} />
        </Switch>
      }
      {
        <Switch element={ingredients}>
          <Ingredients ingredients={ingredients} />
          <Base canDrop={canDrop} />
        </Switch>
      }
      {
        <Switch element={bun}>
          <Bun bun={bun} type={'bottom'} text={'(низ)'} />
          <Base styleType={'bottom'} canDrop={canDrop} />
        </Switch>
      }
    </div>
  );
}