/* eslint-disable react/prop-types */
import React from 'react';

const Card = ({ item }) => {
  return (
    <>
      <img src={item.image} alt={item.name} />
      <div>{item.price}</div>
      <h3>{item.name}</h3>
    </>
  );
};

export default Card;
