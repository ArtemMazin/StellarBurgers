import React, { useEffect } from 'react';
import styles from './order-list.module.css';
import OrderCard from './order-card/order-card';
import { useAppDispatch, useAppSelector } from '@/redux-hooks';
import { useMatch } from 'react-router-dom';
import { ordersSelector } from '@/services/order-feed/order-feed-selectors';
import { connect, disconnect } from '@/services/history-orders/actions';
import { historyOrdersSelector } from '@/services/history-orders/history-orders-selectors';
import { initialIngredients } from '@/services/initial-ingredients/selectors';

const OrderList = () => {
  const dispatch = useAppDispatch();

  const match = useMatch('/profile/orders');

  const orders = useAppSelector(match ? historyOrdersSelector : ordersSelector);
  const ingredients = useAppSelector(initialIngredients);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    match &&
      dispatch(
        connect(`wss://norma.nomoreparties.space/orders?token=${token?.split('Bearer ')[1]}`),
      );
    return () => {
      match && dispatch(disconnect());
    };
  }, [dispatch, match]);

  return (
    <ul className={styles.list}>
      {orders.map((order) => (
        <li key={order._id}>
          <OrderCard order={order} ingredients={ingredients} />
        </li>
      ))}
    </ul>
  );
};
export default OrderList;
