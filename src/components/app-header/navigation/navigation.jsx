/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as components from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './navigation.module.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <Link to="/" className={`${styles.link} pl-5 pr-5 pb-4 pt-4`}>
            <components.BurgerIcon type="primary" />
            <span className="text text_type_main-default ml-2">Конструктор</span>
          </Link>
        </li>

        <li>
          <a href="#" className={`${styles.link} pl-5 pr-5 pb-4 pt-4 ml-2`}>
            <components.ListIcon type="primary" />
            <span className="text text_type_main-default text_color_inactive ml-2">
              Лента заказов
            </span>
          </a>
        </li>

        <li>
          <Link to="/profile" className={`${styles.link} pl-5 pr-5 pb-4 pt-4 ml-2`}>
            <components.ProfileIcon type="primary" />
            <span className="text text_type_main-default text_color_inactive ml-2">
              Личный кабинет
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
