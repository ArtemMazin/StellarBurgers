import React from 'react';
import styles from './modal-container.module.css';
import { useResize } from '@/hooks/useResize';

type TContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: TContainerProps) {
  const { isMobile } = useResize();

  return (
    <div className={`${styles.container} ${isMobile ? 'pl-2 pr-2' : 'pl-10 pr-10'}`}>
      {children}
    </div>
  );
}
