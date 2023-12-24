import React, { useState } from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import Navigation from './navigation/navigation';
import { useResize } from '@/hooks/useResize';
import { URL } from '@/utils/url-config';
import { Link } from 'react-router-dom';
import MobileMenu from './mobile-menu/mobile-menu';
import BurgerButton from './mobile-menu/burger-button/burger-button';

function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const { isMobile, isTablet } = useResize();

  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container pt-4 pb-4`}>
        <Link to={URL.MAIN} className={styles.logo}>
          {isTablet ? <img src="logo.svg" alt="Логотип Stellar Burgers" /> : <Logo />}
        </Link>

        {isMobile ? (
          <>
            <BurgerButton toggleHideMenu={toggleHideMenu} isMenuOpen={isMenuOpen} />
            <MobileMenu toggleHideMenu={toggleHideMenu} isMenuOpen={isMenuOpen} />
          </>
        ) : (
          <Navigation />
        )}
      </div>
    </header>
  );
}

export default AppHeader;
