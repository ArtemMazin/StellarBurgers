import OrderList from '@/components/order-list/order-list';
import styles from './orders.module.css';
import React from 'react';

const Orders = () => {
  return (
    <div className={`mt-10 ml-10 custom-scroll ${styles.container}`}>
      <OrderList />
    </div>
  );
};

export default Orders;
