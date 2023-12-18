import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tabs.module.css';
import { BUNS, MAIN, SAUCES } from '@/utils/tabs-config';

const Tabs = React.forwardRef(function Tabs({ handleTab, activeTab }, ref) {
  function scrollTab(value) {
    handleTab(value);
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

Tabs.propTypes = {
  handleTab: PropTypes.func.isRequired,
  activeTab: PropTypes.oneOf([BUNS, MAIN, SAUCES]),
};
