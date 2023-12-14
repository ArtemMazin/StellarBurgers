import React, { useState } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-order.module.css';
import Modal from '@/components/modal/modal';
import OrderDetails from '@/components/modal/order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import useTotalPrice from '@/hooks/useTotalPrice';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';
import { currentOrder, orderStatus, orderError } from '@/services/order/selectors';
import { createOrder, removeOrder } from '@/services/order/order-slice';
import { deleteAllIngredients } from '@/services/constructor/constructor-slice';
import Preloader from '@/components/preloader/preloader';
import { useNavigate } from 'react-router-dom';
import { URL } from '@/utils/url-config';
import useStatus from '@/hooks/useStatus';

function BurgerOrder() {
  const [isActiveModal, setActiveModal] = useState(false);
  const ingredients = useSelector(allIngredients);
  const bun = useSelector(selectedBun);
  const order = useSelector(currentOrder);
  const status = useSelector(orderStatus);
  const error = useSelector(orderError);

  const totalPrice = useTotalPrice(ingredients, bun);

  const dispatch = useDispatch();

  const navigate = useNavigate();

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

    if (localStorage.getItem('accessToken')) {
      setActiveModal(true);
      dispatch(createOrder(getAllId(bun, ingredients)))
        .unwrap()
        .then(() => dispatch(deleteAllIngredients()))
        .catch((error) => console.error(error));
    } else {
      navigate(URL.LOGIN);
    }
  };

  const content = useStatus(
    <div className="pb-8" style={{ textAlign: 'center' }}>
      <p className="mb-4 text text_type_main-medium">Оформляем заказ...</p>
      <Preloader />
    </div>,
    <OrderDetails order={order} />,
    status,
    error,
  );

  const handleClose = () => {
    dispatch(removeOrder());
    setActiveModal(false);
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
      {(isActiveModal || order) && <Modal onClose={handleClose}>{content}</Modal>}
    </div>
  );
}

export default BurgerOrder;
