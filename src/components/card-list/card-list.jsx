/* eslint-disable react/prop-types */
import React from 'react';
import Card from './card/card';

const CardList = ({ array }) => {
  return (
    <ul>
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
