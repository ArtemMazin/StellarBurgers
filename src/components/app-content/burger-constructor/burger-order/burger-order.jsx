import React from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-order.module.css';
import Modal from '@/components/modal/modal';
import useModal from '@/hooks/useModal';
import OrderDetails from '@/components/modal/order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderThunk } from '@/services/order-slice';

function BurgerOrder() {
  const { ingredients } = useSelector((state) => state.constructorIngredients);
  const { order } = useSelector((state) => state.order);
  const { isModalOpen, handleOpen, handleClose } = useModal();

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    e.preventDefault();
    try {
      const allID = ingredients.map((item) => item._id);
      dispatch(createOrderThunk(allID));
      handleOpen();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`${styles.order} pr-4`}>
      <div>
        <span className="text text_type_digits-medium pr-2">123</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={handleOrder}>
        Оформить заказ
      </Button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleClose}>
          <OrderDetails order={order} />
        </Modal>
      )}
    </div>
  );
}

export default BurgerOrder;
