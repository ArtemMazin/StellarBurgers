import React from 'react';
import styles from './image-list.module.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ImgPath from '@/images/bun-01.png';

const ImageList = () => {
  return (
    <ul className={styles.images}>
      <li className={styles.image_container}>
        <img src={ImgPath} alt="" className={styles.card_image} />
      </li>
      <li className={styles.image_container}>
        <img src={ImgPath} alt="" className={styles.card_image} />
      </li>
      <li className={styles.image_container}>
        <img src={ImgPath} alt="" className={styles.card_image} />
      </li>
      <li className={styles.image_container}>
        <img src={ImgPath} alt="" className={styles.card_image} />
      </li>
      <li className={styles.image_container}>
        <img src={ImgPath} alt="" className={styles.card_image} />
      </li>
    </ul>
  );
};

export default ImageList;
