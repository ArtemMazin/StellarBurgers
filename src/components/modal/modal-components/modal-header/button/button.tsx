import ModalContext from '@/contexts/modalContext';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useContext } from 'react';

export default function ButtonClose() {
  const { onClose } = useContext(ModalContext);

  return <CloseIcon type="primary" onClick={onClose} />;
}
