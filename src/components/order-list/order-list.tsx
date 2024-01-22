import React from 'react';
import styles from './order-list.module.css';
import OrderCard from './order-card/order-card';

const OrderList = () => {
  return (
    <ul className={styles.list}>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
    </ul>
  );
};
export default OrderList;
