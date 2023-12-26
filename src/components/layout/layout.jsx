import React, { useState } from 'react';
import styles from './layout.module.css';
import { Outlet } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import { ToastContainer } from 'react-toastify';
import MobileMenu from '../mobile-menu/mobile-menu';
import MobileNavigation from '../app-header/mobile-navigation/mobile-navigation';
import BurgerButton from '../app-header/burger-button/burger-button';
import { useResize } from '@/hooks/useResize';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConstructorOpen, setIsConstructorOpen] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  const { isMobile } = useResize();

  function toggleBurgerActive() {
    if (isMenuOpen || isConstructorOpen) {
      setButtonActive(false);
    } else {
      setButtonActive(true);
    }
  }

  function showConstructor() {
    setIsConstructorOpen(true);
    setButtonActive(true);
  }

  function toggleHideMenu() {
    setIsMenuOpen(!buttonActive);
    setIsConstructorOpen(false);
    toggleBurgerActive();
  }
  return (
    <>
      {isMobile && <BurgerButton toggleHideMenu={toggleHideMenu} buttonActive={buttonActive} />}

      <AppHeader />
      <div className={styles.container}>
        <Outlet context={[isConstructorOpen, showConstructor]} />
      </div>

      <ToastContainer theme="dark" />

      <MobileMenu isMenuOpen={isMenuOpen}>
        <MobileNavigation />
      </MobileMenu>
    </>
  );
}

export default Layout;
