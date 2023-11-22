import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalContext from '@/contexts/modalContext';
import { createPortal } from 'react-dom';
import Overlay from './modal-overlay/modal-overlay';
import Container from './modal-container/modal-container';
import Header from './modal-header/modal-header';
import Title from './modal-header/title/title';
import ButtonClose from './modal-header/button/button';

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

ModalComponents.Overlay = Overlay;
ModalComponents.Container = Container;
ModalComponents.Header = Header;
ModalComponents.Title = Title;
ModalComponents.ButtonClose = ButtonClose;

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
