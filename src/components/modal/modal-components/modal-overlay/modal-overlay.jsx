/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';
import ModalContext from '@/contexts/modalContext';

export default function Overlay({ children }) {
  const { isOpen, handleOverlay } = useContext(ModalContext);
  return (
    <div className={`${styles.modal} ${isOpen && styles.opened}`} onClick={handleOverlay}>
      {children}
    </div>
  );
}

Overlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]),
};
