/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './navigation.module.css';
import { URL } from '@/utils/url-config';
import MenuLink from '../menu-link/menu-link';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <MenuLink url={URL.MAIN} icon="burger" name="Конструктор бургеров" />
        </li>

        <li>
          <MenuLink url={URL.FEED} icon="order" name="Лента заказов" />
        </li>

        <li>
          <MenuLink url={URL.PROFILE} icon="profile" name="Личный кабинет" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
