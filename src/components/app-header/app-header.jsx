/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as components from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <components.Logo />
        </div>

        <ul className={styles.links}>
          <li className="pl-5 pr-5 pb-4 pt-4 ml-2">
            <a href="#" className={styles.link}>
              <components.BurgerIcon type="primary" />
              <span className="text text_type_main-default ml-2">Конструктор</span>
            </a>
          </li>

          <li className="pl-5 pr-5 pb-4 pt-4 ml-2">
            <a href="#" className={styles.link}>
              <components.ListIcon type="primary" />
              <span className="text text_type_main-default text_color_inactive ml-2">
                Лента заказов
              </span>
            </a>
          </li>

          <li className="pl-5 pr-5 pb-4 pt-4 ml-2">
            <a href="#" className={styles.link}>
              <components.ProfileIcon type="primary" />
              <span className="text text_type_main-default text_color_inactive ml-2">
                Личный кабинет
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
