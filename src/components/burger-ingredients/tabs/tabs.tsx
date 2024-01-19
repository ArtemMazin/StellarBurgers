import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tabs.module.css';
import { BUNS, MAIN, SAUCES } from '@/utils/tabs-config';

type TTabsProps = {
  handleTab: (value: string) => void;
  activeTab: string;
};

const Tabs = React.forwardRef(function Tabs(
  { handleTab, activeTab }: TTabsProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  function scrollTab(value: string) {
    handleTab(value);
    const element = document.querySelector(`#${value}`) as HTMLInputElement;

    element.scrollIntoView();
  }

  return (
    <div className={`${styles.tabs}`} ref={ref}>
      <div className={styles.tab}>
        <Tab value={BUNS} active={activeTab === BUNS} onClick={scrollTab}>
          Булки
        </Tab>
      </div>
      <div className={styles.tab}>
        <Tab value={SAUCES} active={activeTab === SAUCES} onClick={scrollTab}>
          Соусы
        </Tab>
      </div>
      <div className={styles.tab}>
        <Tab value={MAIN} active={activeTab === MAIN} onClick={scrollTab}>
          Начинки
        </Tab>
      </div>
    </div>
  );
});

export default Tabs;
