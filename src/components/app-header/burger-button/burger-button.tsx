import React from 'react';
import styles from './burger-button.module.css';

interface IButtonProps {
  toggleHideMenu: () => void;
  buttonActive: boolean;
}

function BurgerButton({ toggleHideMenu, buttonActive }: IButtonProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleHideMenu}
      className={`${styles.icon} ${buttonActive && styles.active}`}
    >
      <rect x="3" y="6" width="18" height="2" rx="1" fill="#F2F2F3" />
      <rect x="3" y="11" width="18" height="2" rx="1" fill="#F2F2F3" />
      <rect x="3" y="16" width="18" height="2" rx="1" fill="#F2F2F3" />
    </svg>
  );
}

export default BurgerButton;
