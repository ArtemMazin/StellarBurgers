import React from 'react';
import styles from './image-list.module.css';
import { TIngredient } from '@/utils/types';

type TImageListProps = {
  items: (TIngredient | undefined)[];
};

const ImageList = ({ items }: TImageListProps) => {
  const length = items.length - 5;
  return (
    <ul className={styles.images}>
      {items.length <= 5
        ? items.map((item, i) => (
            <li className={styles.image_container} key={item?.customId || i}>
              <img src={item?.image_mobile} alt={item?.name} className={styles.card_image} />
            </li>
          ))
        : items.slice(-6).map((item, i) => (
            <li
              className={`${styles.image_container} ${styles.card_count}`}
              key={item?.customId || i}
            >
              <img src={item?.image_mobile} alt={item?.name} className={styles.card_image} />
              <span className={styles.count}>+{length}</span>
            </li>
          ))}
    </ul>
  );
};

export default ImageList;
