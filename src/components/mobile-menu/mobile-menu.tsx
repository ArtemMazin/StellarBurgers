import React from 'react';
import styles from './mobile-menu.module.css';

type TMobileMenuProps = {
  isMenuOpen: boolean;
  title: string;
  children: React.ReactElement;
};

function MobileMenu({ isMenuOpen, title, children }: TMobileMenuProps) {
  return (
    <div className={`${styles.menu} ${isMenuOpen && styles.menu_open}`}>
      <h2 className="text text_type_main-medium pl-2 pr-2 pt-4 pb-4">{title}</h2>
      {children}
    </div>
  );
}

export default MobileMenu;
