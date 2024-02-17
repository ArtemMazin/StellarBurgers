import React from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './bun.module.css';
import { useResize } from '@/hooks/useResize';
import { TIngredient } from '@/utils/types';

type TBun = {
  bun: TIngredient | null;
  type?: 'top' | 'bottom';
  text: string;
};

export default function Bun({ bun, type, text }: TBun) {
  const { isMobile } = useResize();

  return (
    <div className={`${styles.component} ${isMobile ? 'ml-6' : 'ml-8'} mr-3`} data-test="bun">
      {bun && (
        <ConstructorElement
          type={type}
          isLocked={true}
          text={`${bun.name} ${text}`}
          price={bun.price}
          thumbnail={bun.image}
          extraClass={styles.element}
        />
      )}
    </div>
  );
}
