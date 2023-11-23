import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './bun.module.css';
import ingredientPropTypes from '@/utils/prop-types';

export default function Bun({ array, type, text }) {
  return (
    <div className={`${styles.component} ml-8 pl-3 pr-2`}>
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

Bun.propTypes = {
  array: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  type: PropTypes.oneOf(['top', 'bottom', undefined]),
  text: PropTypes.string,
};
