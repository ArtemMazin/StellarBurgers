import React from 'react';
import styles from './mobile-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

type TTabsProps = {
  handleTab: (value: string) => void;
  activeTab: string;
};

const MobileTabs = React.forwardRef(function Tabs(
  { handleTab, activeTab }: TTabsProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <div className={styles.tabs} ref={ref}>
      <div className={styles.tab}>
        <Tab value="Заказы" active={activeTab === 'Заказы'} onClick={() => handleTab('Заказы')}>
          Заказы
        </Tab>
      </div>
      <div className={styles.tab}>
        <Tab
          value="Статистика"
          active={activeTab === 'Статистика'}
          onClick={() => handleTab('Статистика')}
        >
          Статистика
        </Tab>
      </div>
    </div>
  );
});

export default MobileTabs;
