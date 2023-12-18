import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import { ToastContainer } from 'react-toastify';

function Layout() {
  return (
    <>
      <AppHeader />
      <Outlet />
      <ToastContainer theme="dark" />
    </>
  );
}

export default Layout;
