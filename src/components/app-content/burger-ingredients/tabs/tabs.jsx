/* eslint-disable react/display-name */
import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tabs.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { currentTab } from '@/services/tabs/selectors';
import { tabSwitch } from '@/services/tabs/tabs-slice';
import { BUNS, MAIN, SAUCES } from '@/utils/tabs-config';

const Tabs = React.forwardRef((props, ref) => {
  const activeTab = useSelector(currentTab);

  const dispatch = useDispatch();

  function scrollTab(value) {
    dispatch(tabSwitch(value));
    const element = document.querySelector(`#${value}`);

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
