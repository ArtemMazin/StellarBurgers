import React from 'react';
import styles from './layout.module.css';
import { Outlet } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import { ToastContainer } from 'react-toastify';

function Layout() {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <Outlet />
      </div>
      <ToastContainer theme="dark" />
    </>
  );
}

export default Layout;
