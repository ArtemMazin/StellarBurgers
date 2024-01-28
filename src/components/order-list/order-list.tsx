import React from 'react';
import styles from './order-list.module.css';
import OrderCard from './order-card/order-card';
import { useAppSelector } from '@/redux-hooks';
import { ordersSelector } from '@/services/ws/ws-selectors';

const OrderList = () => {
  const orders = useAppSelector(ordersSelector);

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
