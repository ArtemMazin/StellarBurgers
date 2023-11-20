/* eslint-disable react/prop-types */
import React from 'react';
import Card from './card/card';
import styles from './card-list.module.css';

const CardList = ({ array }) => {
  return (
    <ul className={`${styles.list} pl-3 pr-2 pt-6`}>
      {array.length > 0 &&
        array.map((item) => (
          <li key={item._id}>
            <Card item={item} />
          </li>
        ))}
    </ul>
  );
};

export default CardList;
