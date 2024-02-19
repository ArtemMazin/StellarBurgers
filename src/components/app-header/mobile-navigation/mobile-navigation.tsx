import React, { useState } from 'react';
import MenuLink from '../menu-link/menu-link';
import TriangleIcon from './triangle-icon/triangle-icon';
import ProfileTabs from '@/components/profile-tabs/profile-tabs';
import styles from './mobile-navigation.module.css';
import { URL } from '@/utils/url-config';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMatch } from 'react-router-dom';

type TMobileNavigationProps = {
  toggleHideMenu?: () => void;
};

function MobileNavigation({ toggleHideMenu }: TMobileNavigationProps) {
  const [isActive, setActive] = useState(false);

  const match = useMatch('/profile/*');

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <button className={`${styles.button} pl-2 pr-2 pt-3 pb-3`} onClick={handleClick}>
            <ProfileIcon type={`${match ? 'primary' : 'secondary'}`} />
            <span className={`ml-2 text text_type_main-default ${!match && 'text_color_inactive'}`}>
              Личный кабинет
            </span>

            <TriangleIcon isActive={isActive} />
          </button>

          {isActive && <ProfileTabs toggleHideMenu={toggleHideMenu} />}
        </li>

        <li>
          <MenuLink
            url={URL.MAIN}
            icon="burger"
            name="Конструктор бургеров"
            toggleHideMenu={toggleHideMenu}
          />
        </li>

        <li>
          <MenuLink
            url={URL.FEED}
            icon="order"
            name="Лента заказов"
            toggleHideMenu={toggleHideMenu}
          />
        </li>
      </ul>
    </nav>
  );
}

export default MobileNavigation;
