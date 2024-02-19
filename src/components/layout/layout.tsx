import React, { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import { ToastContainer } from 'react-toastify';
import MobileMenu from '../mobile-menu/mobile-menu';
import MobileNavigation from '../app-header/mobile-navigation/mobile-navigation';
import BurgerButton from '../app-header/burger-button/burger-button';
import { useResize } from '@/hooks/useResize';

type ContextType = [isConstructorOpen: boolean, showConstructor: () => void];

export function useConstructor() {
  return useOutletContext<ContextType>();
}

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isConstructorOpen, setIsConstructorOpen] = useState<boolean>(false);
  const [buttonActive, setButtonActive] = useState<boolean>(false);

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

      <Outlet context={[isConstructorOpen, showConstructor] satisfies ContextType} />

      <ToastContainer theme="dark" />

      <MobileMenu isMenuOpen={isMenuOpen} title="Меню">
        <MobileNavigation toggleHideMenu={toggleHideMenu} />
      </MobileMenu>
    </>
  );
}

export default Layout;
