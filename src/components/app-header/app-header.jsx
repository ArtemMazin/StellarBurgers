import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import Navigation from './navigation/navigation';
import { useResize } from '@/hooks/useResize';
import { URL } from '@/utils/url-config';
import { Link } from 'react-router-dom';
import BurgerButton from './mobile-header/burger-button/burger-button';

function AppHeader() {
  const { isMobile, isTablet } = useResize();

  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <Link to={URL.MAIN} className={styles.logo}>
          {isTablet ? <img src="logo.svg" alt="Логотип Stellar Burgers" /> : <Logo />}
        </Link>

        {isMobile ? <BurgerButton /> : <Navigation />}
      </div>
    </header>
  );
}

export default AppHeader;
