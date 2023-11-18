/* eslint-disable react/prop-types */
import React from 'react';
import styles from './card.module.css';

const Card = ({ item }) => {
  return (
    <div className={`${styles.card}`}>
      <img src={item.image} alt={item.name} />
      <div className="text text_type_digits-default">{item.price}</div>
      <h3 className="text text_type_main-default">{item.name}</h3>
    </div>
  );
};

export default Card;
