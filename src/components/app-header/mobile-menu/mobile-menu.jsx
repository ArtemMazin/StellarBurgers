/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './mobile-menu.module.css';
import MenuLink from '../menu-link/menu-link';
import { URL } from '@/utils/url-config';
import TriangleIcon from './triangle-icon/triangle-icon';
import { useResize } from '@/hooks/useResize';

function MobileMenu({ isMenuOpen }) {
  const [isActive, setActive] = useState(false);

  const { isMobile } = useResize();

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className={`${styles.menu} ${isMenuOpen && styles.menu_open}`}>
        <h2 className="text text_type_main-medium pl-2 pr-2 pt-4 pb-4">Меню</h2>
        <nav className={styles.nav}>
          <ul className={styles.links}>
            <li
              className={`${styles.link} ${
                isMobile ? 'pl-2 pr-2 pb-3 pt-3' : 'pl-5 pr-5 pb-4 pt-4'
              }`}
            >
              <MenuLink url={URL.PROFILE} icon="profile" name="Личный кабинет" />
              <TriangleIcon handleClick={handleClick} isActive={isActive} />
            </li>

            <li
              className={`${styles.link} ${
                isMobile ? 'pl-2 pr-2 pb-3 pt-3' : 'pl-5 pr-5 pb-4 pt-4'
              }`}
            >
              <MenuLink url={URL.MAIN} icon="burger" name="Конструктор бургеров" />
            </li>

            <li
              className={`${styles.link} ${
                isMobile ? 'pl-2 pr-2 pb-3 pt-3' : 'pl-5 pr-5 pb-4 pt-4'
              }`}
            >
              <MenuLink url={URL.HISTORY_ORDERS} icon="order" name="Лента заказов" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;
