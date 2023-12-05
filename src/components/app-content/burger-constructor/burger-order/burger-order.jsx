import React from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-order.module.css';
import Modal from '@/components/modal/modal';
import OrderDetails from '@/components/modal/order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import useTotalPrice from '@/hooks/useTotalPrice';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';
import { currentOrder } from '@/services/order/selectors';
import { createOrderThunk, removeOrder } from '@/services/order/order-slice';
import { deleteAllIngredient } from '@/services/constructor/constructor-slice';

function BurgerOrder() {
  const ingredients = useSelector(allIngredients);
  const bun = useSelector(selectedBun);
  const order = useSelector(currentOrder);

  const totalPrice = useTotalPrice(ingredients, bun);

  const dispatch = useDispatch();

  function getAllId() {
    const ingredientsID = ingredients.map((item) => item._id);
    ingredientsID.push(bun._id);
    ingredientsID.unshift(bun._id);
    const allID = ingredientsID;

    return allID;
  }

  const handleOrder = (e) => {
    e.preventDefault();
    try {
      dispatch(createOrderThunk(getAllId()));
      dispatch(deleteAllIngredient());
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
