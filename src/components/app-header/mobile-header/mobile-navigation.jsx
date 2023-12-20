/* eslint-disable react/prop-types */
import React from 'react';
import styles from './mobile-navigation.module.css';
import BurgerButton from './burger-button/burger-button';
import MobileMenu from './mobile-menu/mobile-menu';

function MobileNavigation({ toggleHideMenu, isMenuOpen }) {
  return (
    <>
      <BurgerButton toggleHideMenu={toggleHideMenu} isMenuOpen={isMenuOpen} />

      <div className={`${styles.menu} ${isMenuOpen && styles.menu_open}`}>
        <h2>Меню</h2>
        <MobileMenu isMenuOpen={isMenuOpen} />
      </div>
    </>
  );
}

export default MobileNavigation;
