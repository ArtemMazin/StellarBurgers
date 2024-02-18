import ModalContext from '@/contexts/modalContext';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './button.module.css';
import React, { useContext } from 'react';

export default function ButtonClose() {
  const { onClose } = useContext(ModalContext);

  return (
    <button className={styles.button} onClick={onClose} data-test="close-button">
      <CloseIcon type="primary" />
    </button>
  );
}
