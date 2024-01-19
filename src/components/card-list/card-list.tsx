import React from 'react';
import Card from './card/card';
import styles from './card-list.module.css';
import { useResize } from '@/hooks/useResize';
import { TIngredient } from '@/utils/types';

type TCardListProps = {
  ingredientsGroup: TIngredient[];
};

export default function CardList({ ingredientsGroup }: TCardListProps) {
  const { isMobile } = useResize();

  return (
    <>
      <ul className={`${styles.list} ${!isMobile && 'pl-3 pr-4'} pt-6`}>
        {ingredientsGroup.length > 0 &&
          ingredientsGroup.map((item) => (
            <li key={item._id}>
              <Card item={item} />
            </li>
          ))}
      </ul>
    </>
  );
}
