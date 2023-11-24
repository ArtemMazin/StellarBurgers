import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import Navigation from './navigation/navigation';
import { useResize } from '@/hooks/useResize';

function AppHeader() {
  const { isMobile, isTablet } = useResize();

  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.logo}>
          {isTablet ? <img src="logo.svg" alt="Логотип Stellar Burgers" /> : <Logo />}
        </div>

        {isMobile ? <></> : <Navigation />}
      </div>
    </header>
  );
}

export default AppHeader;
