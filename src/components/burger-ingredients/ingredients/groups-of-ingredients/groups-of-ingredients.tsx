import React from 'react';
import styles from './groups-of-ingredients.module.css';
import CardList from '@/components/card-list/card-list';
import { useResize } from '@/hooks/useResize';
import { TIngredient } from '@/utils/types';

type TGroupsOfIngredients = {
  ingredientsGroup: TIngredient[];
  title: 'Булки' | 'Соусы' | 'Начинки';
};

export default function GroupsOfIngredients({ ingredientsGroup, title }: TGroupsOfIngredients) {
  const { isMobile } = useResize();

  return (
    <div className={`${styles.ingredients} ${isMobile ? 'mt-5' : 'mt-10'}`}>
      <h2 className="mb-4 text text_type_main-medium">{title}</h2>
      <CardList ingredientsGroup={ingredientsGroup} />
    </div>
  );
}
