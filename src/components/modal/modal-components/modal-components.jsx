import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalContext from '@/contexts/modalContext';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeCurrentIngredient } from '@/services/current-ingredient-slice';
import { removeOrder } from '@/services/order-slice';

const modalRoot = document.getElementById('modals');

export default function ModalComponents({ onClose, children }) {
  const { currentIngredient } = useSelector((state) => state.currentIngredient);
  const { order } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentIngredient && !order) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        currentIngredient && dispatch(removeCurrentIngredient());
        order && dispatch(removeOrder());
      }
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [currentIngredient, dispatch, order]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      currentIngredient && dispatch(removeCurrentIngredient());
      order && dispatch(removeOrder());
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
