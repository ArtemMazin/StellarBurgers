import React, { useEffect } from 'react';
import ModalContext from '@/contexts/modalContext';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

const modalRoot = document.getElementById('modals') as HTMLElement;

interface IModalComponents {
  isOpen: object;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ModalComponents({ isOpen, onClose, children }: IModalComponents) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [dispatch, isOpen, onClose]);

  const handleOverlay = (e: KeyboardEvent) => {
    if (e.target === e.currentTarget) {
      isOpen && onClose();
    }
  };

  return (
    <>
      {createPortal(
        <ModalContext.Provider value={{ onClose, handleOverlay }}>
          {children}
        </ModalContext.Provider>,
        modalRoot,
      )}
    </>
  );
}
