import React from 'react';
import styles from './base.module.css';
import { useResize } from '@/hooks/useResize';

type TBase = {
  styleType?: 'top' | 'bottom';
  canDrop: boolean;
};

function Base({ styleType, canDrop }: TBase) {
  const { isMobile } = useResize();

  let boxShadow = '';
  if (canDrop) {
    boxShadow = '0px 0px 20px rgba(76, 76, 255, 0.4), -0px -0px 20px rgba(76, 76, 255, 0.4)';
  }

  return (
    <div
      style={{ boxShadow }}
      className={`${styles.base} ${styleType === 'top' && styles.base_top} 
      ${styleType === 'bottom' && styles.base_bottom} ${isMobile ? 'mt-3' : 'ml-8 mr-3'}`}
    ></div>
  );
}

export default Base;
