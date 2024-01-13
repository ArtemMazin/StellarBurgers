import React, { useEffect } from 'react';
import ModalContext from '@/contexts/modalContext';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { THandleOverlay } from '@/utils/types';

const modalRoot = document.getElementById('modals') as HTMLElement;

type TModalComponentsProps = {
  isOpen: object;
  onClose: () => void;
  children: React.ReactNode;
};

export default function ModalComponents({ isOpen, onClose, children }: TModalComponentsProps) {
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

  const handleOverlay: THandleOverlay = (e) => {
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
