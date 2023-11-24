import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tabs.module.css';

function Tabs() {
  const [current, setCurrent] = React.useState('Булки');

  function scrollTab(value) {
    setCurrent(value);
    const element = document.querySelector(`#${value}`);

    element.scrollIntoView();
  }

  return (
    <div className={`${styles.tabs} mb-10`}>
      <div className={styles.tab}>
        <Tab value="Булки" active={current === 'Булки'} onClick={() => scrollTab('Булки')}>
          Булки
        </Tab>
      </div>
      <div className={styles.tab}>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={() => scrollTab('Соусы')}>
          Соусы
        </Tab>
      </div>
      <div className={styles.tab}>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={() => scrollTab('Начинки')}>
          Начинки
        </Tab>
      </div>
    </div>
  );
}

export default Tabs;
