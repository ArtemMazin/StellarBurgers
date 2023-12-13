import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalContext from '@/contexts/modalContext';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeCurrentIngredient } from '@/services/current-ingredient/current-ingredient-slice';
import { removeOrder } from '@/services/order/order-slice';
import { currentIngredient } from '@/services/current-ingredient/selecrors';
import { currentOrder } from '@/services/order/selectors';

const modalRoot = document.getElementById('modals');

export default function ModalComponents({ onClose, children }) {
  const ingredient = useSelector(currentIngredient);
  const order = useSelector(currentOrder);

  const dispatch = useDispatch();

  const isOpen = ingredient || order;

  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        ingredient && dispatch(removeCurrentIngredient());
        order && dispatch(removeOrder());
      }
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [ingredient, dispatch, order, isOpen]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      ingredient && dispatch(removeCurrentIngredient());
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
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]),
};
