import OrderList from '@/components/order-list/order-list';
import styles from './orders.module.css';
import React from 'react';
import { useResize } from '@/hooks/useResize';

const Orders = () => {
  const { isMobile } = useResize();

  return (
    <div className={`${!isMobile && 'mt-10 ml-10'} custom-scroll ${styles.container}`}>
      <OrderList />
    </div>
  );
};

export default Orders;
