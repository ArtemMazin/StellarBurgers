/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './mobile-menu.module.css';
import MenuLink from '../menu-link/menu-link';
import { URL } from '@/utils/url-config';
import TriangleIcon from './triangle-icon/triangle-icon';
import ProfileTabs from '@/components/profile-tabs/profile-tabs';

function MobileMenu({ isMenuOpen }) {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className={`${styles.menu} ${isMenuOpen && styles.menu_open}`}>
        <h2 className="text text_type_main-medium pl-2 pr-2 pt-4 pb-4">Меню</h2>
        <nav className={styles.nav}>
          <ul className={styles.links}>
            <li>
              <div className={styles.link}>
                <MenuLink url={URL.PROFILE} icon="profile" name="Личный кабинет" />
                <TriangleIcon handleClick={handleClick} isActive={isActive} />
              </div>

              {isActive && <ProfileTabs />}
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
