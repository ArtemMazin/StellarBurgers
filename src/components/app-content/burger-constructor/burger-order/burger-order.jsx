import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-order.module.css';
import React, { useState } from 'react';
import Modal from '@/components/modal/modal';

function BurgerOrder() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpen() {
    setIsModalOpen(true);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <div className={`${styles.order} pr-4`}>
      <div>
        <span className="text text_type_digits-medium pr-2">123</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={handleOpen}>
        Оформить заказ
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleClose} />
    </div>
  );
}

export default BurgerOrder;
