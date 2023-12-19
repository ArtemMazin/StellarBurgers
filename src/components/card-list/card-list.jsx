import React from 'react';
import PropTypes from 'prop-types';
import Card from './card/card';
import styles from './card-list.module.css';
import ingredientPropTypes from '@/utils/prop-types';
import { useResize } from '@/hooks/useResize';

export default function CardList({ ingredientsGroup }) {
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

CardList.propTypes = {
  ingredientsGroup: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
