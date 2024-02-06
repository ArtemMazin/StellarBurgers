import React from 'react';
import styles from './burger-components.module.css';
import Bun from './bun/bun';
import Ingredients from './ingredients/ingredients';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';
import { ItemTypes } from '@/utils/drag-configs';
import Base from './base/base';
import { useDrop } from 'react-dnd';
import Switch from './switch-components/switch-components';
import { useResize } from '@/hooks/useResize';
import { useAppSelector } from '@/redux-hooks';

export default function BurgerComponents() {
  const bun = useAppSelector(selectedBun);
  const ingredients = useAppSelector(allIngredients);

  const { isMobile } = useResize();

  const [{ canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.INGREDIENT,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div className={`${styles.components} ${!isMobile && 'mb-10'}`} ref={drop}>
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
