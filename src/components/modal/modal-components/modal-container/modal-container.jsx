import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-container.module.css';

export default function Container({ children }) {
  return <div className={`${styles.container} pl-10 pr-10 pt-10`}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]),
};
