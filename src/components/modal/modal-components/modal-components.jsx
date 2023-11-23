import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalContext from '@/contexts/modalContext';
import { createPortal } from 'react-dom';

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

ModalComponents.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]),
};
