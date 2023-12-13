import React from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-order.module.css';
import Modal from '@/components/modal/modal';
import OrderDetails from '@/components/modal/order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import useTotalPrice from '@/hooks/useTotalPrice';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';
import { currentOrder, currentStatus, currentError } from '@/services/order/selectors';
import { createOrder, removeOrder } from '@/services/order/order-slice';
import { deleteAllIngredients } from '@/services/constructor/constructor-slice';
import Preloader from '@/components/preloader/preloader';

function BurgerOrder() {
  const ingredients = useSelector(allIngredients);
  const bun = useSelector(selectedBun);
  const order = useSelector(currentOrder);
  const status = useSelector(currentStatus);
  const error = useSelector(currentError);

  const totalPrice = useTotalPrice(ingredients, bun);

  const dispatch = useDispatch();

  function getAllId(bun, ingredients) {
    if (!bun || ingredients.length < 1) {
      throw new Error('Выберите булку и ингредиенты');
    }

    const ingredientsID = ingredients.map((item) => item._id);
    ingredientsID.push(bun._id);
    ingredientsID.unshift(bun._id);
    const allID = ingredientsID;

    return allID;
  }

  const handleOrder = (e) => {
    e.preventDefault();

    dispatch(createOrder(getAllId(bun, ingredients)))
      .unwrap()
      .then(() => dispatch(deleteAllIngredients()))
      .catch((error) => console.error(error));
  };

  let content;
  if (status === 'loading') {
    content = <Preloader />;
  } else if (status === 'succeeded') {
    content = <OrderDetails order={order} />;
  } else if (status === 'failed') {
    content = <>{error}</>;
  }

  return (
    <div className={`${styles.order} pr-4`}>
      <div>
        <span className="text text_type_digits-medium pr-2">{totalPrice}</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={handleOrder}>
        Оформить заказ
      </Button>
      {order && <Modal onClose={() => dispatch(removeOrder())}>{content}</Modal>}
    </div>
  );
}

export default BurgerOrder;
