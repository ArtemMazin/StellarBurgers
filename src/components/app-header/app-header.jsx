import React, { useState } from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import Navigation from './navigation/navigation';
import { useResize } from '@/hooks/useResize';
import { URL } from '@/utils/url-config';
import { Link } from 'react-router-dom';
import MobileNavigation from './mobile-header/mobile-navigation';

function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const { isMobile, isTablet } = useResize();

  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <Link to={URL.MAIN} className={styles.logo}>
          {isTablet ? <img src="logo.svg" alt="Логотип Stellar Burgers" /> : <Logo />}
        </Link>

        {isMobile ? (
          <MobileNavigation toggleHideMenu={toggleHideMenu} isMenuOpen={isMenuOpen} />
        ) : (
          <Navigation />
        )}
      </div>
    </header>
  );
}

export default AppHeader;
