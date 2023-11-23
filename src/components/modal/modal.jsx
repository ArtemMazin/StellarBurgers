import React from 'react';
import PropTypes from 'prop-types';
import ModalComponents from './modal-components/modal-components';
import Overlay from './modal-components/modal-overlay/modal-overlay';
import Container from './modal-components/modal-container/modal-container';
import Header from './modal-components/modal-header/modal-header';
import Title from './modal-components/modal-header/title/title';
import ButtonClose from './modal-components/modal-header/button/button';

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <ModalComponents isOpen={isOpen} onClose={onClose}>
      <Overlay>
        <Container>
          <Header>
            <Title title={title} />
            <ButtonClose />
          </Header>
          {children}
        </Container>
      </Overlay>
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
