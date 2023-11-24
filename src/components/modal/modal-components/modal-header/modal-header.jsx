import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-header.module.css';

export default function Header({ children }) {
  return <div className={`${styles.header} mb-4`}>{children}</div>;
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]),
};
