/* eslint-disable react/prop-types */
import React from 'react';
import ModalComponents from './modal-components/modal-components';

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <ModalComponents isOpen={isOpen} onClose={onClose}>
      <ModalComponents.Overlay>
        <ModalComponents.Container>
          <ModalComponents.Header>
            <ModalComponents.Title title={title} />
            <ModalComponents.ButtonClose />
          </ModalComponents.Header>
          {children}
        </ModalComponents.Container>
      </ModalComponents.Overlay>
    </ModalComponents>
  );
};

export default Modal;
