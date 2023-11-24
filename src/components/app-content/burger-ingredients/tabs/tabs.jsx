import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tabs.module.css';

function Tabs() {
  const [current, setCurrent] = React.useState('Булки');
  return (
    <div className={`${styles.tabs} mb-10`}>
      <div className={styles.tab}>
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
          Булки
        </Tab>
      </div>
      <div className={styles.tab}>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
      </div>
      <div className={styles.tab}>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    </div>
  );
}

export default Tabs;
