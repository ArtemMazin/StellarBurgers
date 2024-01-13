import React from 'react';
import styles from './modal-header.module.css';
import { useResize } from '@/hooks/useResize';

type THeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: THeaderProps) {
  const { isMobile } = useResize();

  return (
    <div className={`${styles.header} ${isMobile ? 'pt-4 pb-4 mb-4' : 'pt-10 mb-4'}`}>
      {children}
    </div>
  );
}
