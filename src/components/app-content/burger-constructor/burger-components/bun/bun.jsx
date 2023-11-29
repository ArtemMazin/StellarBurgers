/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './bun.module.css';
import ingredientPropTypes from '@/utils/prop-types';

export default function Bun({ bun, type, text }) {
  return (
    <div className={`${styles.component} ml-8 mr-3 pl-3 pr-2`}>
      <ConstructorElement
        type={type}
        isLocked={true}
        text={`${bun.name} ${text}`}
        price={bun.price}
        thumbnail={bun.image}
      />
    </div>
  );
}

Bun.propTypes = {
  array: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  type: PropTypes.oneOf(['top', 'bottom', undefined]),
  text: PropTypes.string,
};
