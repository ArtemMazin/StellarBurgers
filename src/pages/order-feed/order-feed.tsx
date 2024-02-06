import React, { useEffect } from 'react';
import styles from './order-feed.module.css';
import Stats from './stats/stats';
import OrderList from '@/components/order-list/order-list';
import { useAppDispatch } from '@/redux-hooks';
import { connect, disconnect } from '../../services/order-feed/actions';
import { WS_API_URL } from '@/utils/constants';

const OrderFeed = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(connect(`${WS_API_URL}/all`));
    return () => {
      dispatch(disconnect());
    };
  }, [dispatch]);

  return (
    <main className={`pl-5 pr-5 container ${styles.main}`}>
      <h1 className="text text_type_main-large pt-10 pb-5">Лента заказов</h1>
      <div className={styles.content}>
        <section className={`custom-scroll ${styles.order_container}`}>
          <OrderList />
        </section>
        <section className={styles.stats_container}>
          <Stats />
        </section>
      </div>
    </main>
  );
};

export default OrderFeed;
