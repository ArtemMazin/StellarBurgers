import React, { useEffect } from 'react';
import styles from './order-list.module.css';
import OrderCard from './order-card/order-card';
import { useAppDispatch, useAppSelector } from '@/redux-hooks';
import { useMatch } from 'react-router-dom';
import { ordersSelector } from '@/services/order-feed/order-feed-selectors';
import { wsClose, wsConnect } from '@/services/history-orders/history-orders-slice';
import { historyOrdersSelector } from '@/services/history-orders/history-orders-selectors';

const OrderList = () => {
  const dispatch = useAppDispatch();

  const match = useMatch('/profile/orders');

  const orders = useAppSelector(match ? historyOrdersSelector : ordersSelector);

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    match &&
      dispatch(
        wsConnect(`wss://norma.nomoreparties.space/orders?token=${token?.split('Bearer ')[1]}`),
      );
    return () => {
      dispatch(wsClose());
    };
  }, [dispatch, match, token]);

  return (
    <ul className={styles.list}>
      {orders?.map((order) => (
        <li key={order._id}>
          <OrderCard order={order} />
        </li>
      ))}
    </ul>
  );
};
export default OrderList;
