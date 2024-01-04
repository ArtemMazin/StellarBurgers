/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useContext } from 'react';
import styles from './modal-overlay.module.css';
import ModalContext from '@/contexts/modalContext';

interface IOverlay {
  children: React.ReactNode;
}

export default function Overlay({ children }: IOverlay) {
  const { handleOverlay } = useContext(ModalContext);
  return (
    <div className={`${styles.modal} ${styles.opened}`} onClick={handleOverlay}>
      {children}
    </div>
  );
}
