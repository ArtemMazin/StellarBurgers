import React, { useEffect, useRef, useState } from 'react';
import styles from './order-feed.module.css';
import Stats from './stats/stats';
import OrderList from '@/components/order-list/order-list';
import { useAppDispatch } from '@/redux-hooks';
import { connect, disconnect } from '../../services/order-feed/actions';
import { WS_API_URL } from '@/utils/constants';
import { useResize } from '@/hooks/useResize';
import MobileTabs from './mobile-tabs/mobile-tabs';

const OrderFeed = () => {
  const [activeTab, setActiveTab] = useState<string>('Заказы');

  const { isMobile } = useResize();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(connect(`${WS_API_URL}/all`));
    return () => {
      dispatch(disconnect());
    };
  }, [dispatch]);

  const handleTab = (tabName: string) => {
    setActiveTab(tabName);
  };
  const tabsRef = useRef<HTMLDivElement>(null);

  return (
    <main className={`${styles.main} ${isMobile ? 'pl-2 pr-2' : 'pl-5 pr-5'} container`}>
      <h1
        className={`text ${styles.title} ${
          isMobile ? 'text_type_main-medium pt-4 pb-2' : 'text_type_main-large pt-10 pb-5'
        }`}
      >
        Лента заказов
      </h1>

      <div className={styles.content}>
        {isMobile ? (
          <>
            <MobileTabs ref={tabsRef} handleTab={handleTab} activeTab={activeTab} />
            <section className={`custom-scroll pt-4 mt-1 ${styles.order_container}`}>
              {activeTab === 'Заказы' && <OrderList />}
              {activeTab === 'Статистика' && <Stats />}
            </section>
          </>
        ) : (
          <>
            <section className={`custom-scroll ${styles.order_container}`}>
              <OrderList />
            </section>
            <section className={styles.stats_container}>
              <Stats />
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default OrderFeed;
