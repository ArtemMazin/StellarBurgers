import React from 'react';
import styles from './order-list.module.css';
import OrderCard from './order-card/order-card';

const OrderList = () => {
  return (
    <section>
      <ul className={`custom-scroll ${styles.list}`}>
        <li>
          <OrderCard />
        </li>
      </ul>
    </section>
  );
};
export default OrderList;
