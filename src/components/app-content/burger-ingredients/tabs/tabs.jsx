/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './tabs.module.css';

function Tabs() {
  return (
    <ul className={styles.tabs}>
      <li>
        <a href="#" className={`${styles.tab} pt-4 pb-4 pl-10 pr-10`}>
          <span>Булки</span>
        </a>
      </li>
      <li>
        <a href="#" className={`${styles.tab} pt-4 pb-4 pl-10 pr-10`}>
          <span className="text_color_inactive">Соусы</span>
        </a>
      </li>
      <li>
        <a href="#" className={`${styles.tab} pt-4 pb-4 pl-10 pr-10`}>
          <span className="text_color_inactive">Начинки</span>
        </a>
      </li>
    </ul>
  );
}

export default Tabs;
