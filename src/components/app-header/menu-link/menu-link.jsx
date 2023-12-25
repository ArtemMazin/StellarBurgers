/* eslint-disable react/prop-types */
import React from 'react';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './menu-link.module.css';
import { NavLink } from 'react-router-dom';
import { useResize } from '@/hooks/useResize';

function MenuLink({ url, name, icon }) {
  const { isMobile } = useResize();

  function renderIcon(isActive) {
    let content;
    switch (icon) {
      case 'profile':
        content = <ProfileIcon type={`${!isActive ? 'secondary' : 'primary'}`} />;
        break;
      case 'burger':
        content = <BurgerIcon type={`${!isActive ? 'secondary' : 'primary'}`} />;
        break;
      case 'order':
        content = <ListIcon type={`${!isActive ? 'secondary' : 'primary'}`} />;
        break;

      default:
        break;
    }
    return content;
  }

  return (
    <NavLink
      to={url}
      className={`${styles.link} ${isMobile ? 'pl-2 pr-2 pb-3 pt-3' : 'pl-5 pr-5 pb-4 pt-4'}`}
    >
      {({ isActive }) => (
        <>
          {renderIcon(isActive)}
          <span
            className={`${!isActive && 'text_color_inactive'} text text_type_main-default ml-2`}
          >
            {name}
          </span>
        </>
      )}
    </NavLink>
  );
}

export default MenuLink;
