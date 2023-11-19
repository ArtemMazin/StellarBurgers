/* eslint-disable react/prop-types */
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './bun.module.css';
import React from 'react';

export default function Bun({ array, type, text }) {
  return (
    <div className={`${styles.component} ml-8`}>
      {array.length > 0 && (
        <ConstructorElement
          type={type}
          isLocked={true}
          text={`${array[0].name} ${text}`}
          price={array[0].price}
          thumbnail={array[0].image}
        />
      )}
    </div>
  );
}
