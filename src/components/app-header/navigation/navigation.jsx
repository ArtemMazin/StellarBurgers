/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
import { URL } from '@/utils/url-config';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <NavLink to={URL.MAIN} className={`${styles.link} pl-5 pr-5 pb-4 pt-4`}>
            {({ isActive }) => (
              <>
                <BurgerIcon type={`${!isActive ? 'secondary' : 'primary'}`} />
                <span
                  className={`${
                    !isActive && 'text_color_inactive'
                  } text text_type_main-default ml-2`}
                >
                  Конструктор
                </span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to={URL.HISTORY_ORDERS} className={`${styles.link} pl-5 pr-5 pb-4 pt-4 ml-2`}>
            {({ isActive }) => (
              <>
                <ListIcon type={`${!isActive ? 'secondary' : 'primary'}`} />
                <span
                  className={`${
                    !isActive && 'text_color_inactive'
                  } text text_type_main-default ml-2`}
                >
                  Лента заказов
                </span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to={URL.PROFILE} className={`${styles.link} pl-5 pr-5 pb-4 pt-4 ml-2`}>
            {({ isActive }) => (
              <>
                <ProfileIcon type={`${!isActive ? 'secondary' : 'primary'}`} />
                <span
                  className={`${
                    !isActive && 'text_color_inactive'
                  } text text_type_main-default ml-2`}
                >
                  Личный кабинет
                </span>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
