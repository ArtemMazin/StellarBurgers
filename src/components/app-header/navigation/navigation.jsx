/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './navigation.module.css';
import { Link } from 'react-router-dom';
import { URL } from '@/utils/url-config';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function Navigation() {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <Link to={URL.MAIN} className={`${styles.link} pl-5 pr-5 pb-4 pt-4`}>
            <BurgerIcon type={`${location.pathname !== URL.MAIN ? 'secondary' : 'primary'}`} />
            <span
              className={`${
                location.pathname !== URL.MAIN && 'text_color_inactive'
              } text text_type_main-default ml-2`}
            >
              Конструктор
            </span>
          </Link>
        </li>

        <li>
          <Link to={URL.HISTORY_ORDERS} className={`${styles.link} pl-5 pr-5 pb-4 pt-4 ml-2`}>
            <ListIcon
              type={`${location.pathname !== URL.HISTORY_ORDERS ? 'secondary' : 'primary'}`}
            />
            <span
              className={`${
                location.pathname !== URL.HISTORY_ORDERS && 'text_color_inactive'
              } text text_type_main-default ml-2`}
            >
              Лента заказов
            </span>
          </Link>
        </li>

        <li>
          <Link to={URL.PROFILE} className={`${styles.link} pl-5 pr-5 pb-4 pt-4 ml-2`}>
            <ProfileIcon type={`${location.pathname !== URL.PROFILE ? 'secondary' : 'primary'}`} />
            <span
              className={`${
                location.pathname !== URL.PROFILE && 'text_color_inactive'
              } text text_type_main-default ml-2`}
            >
              Личный кабинет
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
