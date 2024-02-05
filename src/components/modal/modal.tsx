import React from 'react';
import ModalComponents from './modal-components/modal-components';
import Overlay from './modal-components/modal-overlay/modal-overlay';
import Container from './modal-components/modal-container/modal-container';
import Header from './modal-components/modal-header/modal-header';
import Title from './modal-components/modal-header/title/title';
import ButtonClose from './modal-components/modal-header/button/button';

type TModalProps = {
  isOpen: object;
  onClose: () => void;
  title?: string;
  title_type?: 'text' | 'digits';
  children: JSX.Element;
};

const Modal = ({ isOpen, onClose, title = '', title_type = 'text', children }: TModalProps) => {
  return (
    <ModalComponents isOpen={isOpen} onClose={onClose}>
      <Overlay>
        <Container>
          <Header>
            <Title title={title} type={title_type} />
            <ButtonClose />
          </Header>
          {children}
        </Container>
      </Overlay>
    </ModalComponents>
  );
};

export default Modal;
