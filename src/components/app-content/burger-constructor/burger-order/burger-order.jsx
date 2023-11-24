import React from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-order.module.css';
import Modal from '@/components/modal/modal';
import useModal from '@/hooks/useModal';
import OrderDetails from '@/components/modal/order-details/order-details';

function BurgerOrder() {
  const { isModalOpen, handleOpen, handleClose } = useModal();

  return (
    <div className={`${styles.order} pr-4`}>
      <div>
        <span className="text text_type_digits-medium pr-2">123</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={handleOpen}>
        Оформить заказ
      </Button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleClose}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default BurgerOrder;
