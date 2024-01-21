import React from 'react';
import styles from './order-list.module.css';
import OrderCard from './order-card/order-card';

const OrderList = () => {
  return (
    <section className={styles.container}>
      <ul className={`custom-scroll ${styles.list}`}>
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
    </section>
  );
};
export default OrderList;
