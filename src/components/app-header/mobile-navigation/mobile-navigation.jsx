import React, { useState } from 'react';
import MenuLink from '../menu-link/menu-link';
import TriangleIcon from './triangle-icon/triangle-icon';
import ProfileTabs from '@/components/profile-tabs/profile-tabs';
import styles from './mobile-navigation.module.css';
import { URL } from '@/utils/url-config';

function MobileNavigation() {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
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
  );
}

export default MobileNavigation;
