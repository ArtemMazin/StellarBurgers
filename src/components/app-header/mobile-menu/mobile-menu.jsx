/* eslint-disable react/prop-types */
import React from 'react';
import styles from './mobile-menu.module.css';
import MenuLink from '../menu-link/menu-link';
import { URL } from '@/utils/url-config';

function MobileMenu({ isMenuOpen }) {
  return (
    <>
      <div className={`${styles.menu} ${isMenuOpen && styles.menu_open}`}>
        <h2>Меню</h2>
        <nav className={styles.nav}>
          <ul className={styles.links}>
            <li>
              <MenuLink url={URL.PROFILE} icon="profile" name="Личный кабинет" />
            </li>

            <li>
              <MenuLink url={URL.MAIN} icon="burger" name="Конструктор бургеров" />
            </li>

            <li>
              <MenuLink url={URL.HISTORY_ORDERS} icon="order" name="Лента заказов" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;
