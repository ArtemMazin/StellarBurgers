import React, { useState } from 'react';
import styles from './layout.module.css';
import { Outlet } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import { ToastContainer } from 'react-toastify';
import MobileMenu from '../mobile-menu/mobile-menu';
import MobileNavigation from '../app-header/mobile-navigation/mobile-navigation';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <AppHeader toggleHideMenu={toggleHideMenu} isMenuOpen={isMenuOpen} />
      <div className={styles.container}>
        <Outlet context={[toggleHideMenu]} />
      </div>
      <ToastContainer theme="dark" />
      <MobileMenu isMenuOpen={isMenuOpen}>
        <MobileNavigation />
      </MobileMenu>
    </>
  );
}

export default Layout;
