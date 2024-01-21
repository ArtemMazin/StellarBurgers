import React from 'react';
import styles from './order-feed.module.css';
import OrderList from './order-list/order-list';
import Stats from './stats/stats';

// type TOrderFeed {
// }

const OrderFeed = () => {
  return (
    <main className={`pl-5 pr-5 container ${styles.main}`}>
      <h1 className="text text_type_main-large pt-10 pb-5">Лента заказов</h1>
      <div className={styles.content}>
        <OrderList />
        <Stats />
      </div>
    </main>
  );
};

export default OrderFeed;
