import React from 'react';
import PropTypes from 'prop-types';
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

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]),
};

export default Modal;
