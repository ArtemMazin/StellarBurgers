import React from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-order.module.css';
import Modal from '@/components/modal/modal';
import OrderDetails from '@/components/modal/order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderThunk } from '@/services/order-slice';
import useTotalPrice from '@/hooks/useTotalPrice';
import { removeOrder } from '@/services/order-slice';

function BurgerOrder() {
  const { ingredients, bun } = useSelector((state) => state.constructorIngredients);
  const { order } = useSelector((state) => state.order);

  const totalPrice = useTotalPrice(ingredients, bun);

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    e.preventDefault();
    try {
      const allID = ingredients.map((item) => item._id);
      dispatch(createOrderThunk(allID));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`${styles.order} pr-4`}>
      <div>
        <span className="text text_type_digits-medium pr-2">{totalPrice}</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={handleOrder}>
        Оформить заказ
      </Button>
      {order && (
        <Modal onClose={() => dispatch(removeOrder())}>
          <OrderDetails order={order} />
        </Modal>
      )}
    </div>
  );
}

export default BurgerOrder;
