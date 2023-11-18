import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import Navigation from './navigation/navigation';

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <Navigation />
      </div>
    </header>
  );
}

export default AppHeader;
