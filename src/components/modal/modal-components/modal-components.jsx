/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import React, { useContext, useEffect } from 'react';
import styles from './modal-components.module.css';
import ModalContext from '@/contexts/modalContext';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('modals');

export default function ModalComponents({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      {createPortal(
        <ModalContext.Provider value={{ isOpen, onClose, handleOverlay }}>
          {children}
        </ModalContext.Provider>,
        modalRoot,
      )}
    </>
  );
}

ModalComponents.Overlay = function Overlay({ children }) {
  const { isOpen, handleOverlay } = useContext(ModalContext);
  return (
    <div className={`${styles.modal} ${isOpen && styles.opened}`} onClick={handleOverlay}>
      {children}
    </div>
  );
};

ModalComponents.Container = function Container({ children }) {
  return <div className={`${styles.container} pl-10 pr-10 pt-10`}>{children}</div>;
};

ModalComponents.Header = function Header({ children }) {
  return <div className={`${styles.header} mb-4`}>{children}</div>;
};

ModalComponents.Title = function Title({ title }) {
  return <h2 className={`${styles.title} text text_type_main-large`}>{title}</h2>;
};

ModalComponents.ButtonClose = function ButtonClose() {
  const { onClose } = useContext(ModalContext);
  return <CloseIcon type="primary" onClick={onClose} />;
};
