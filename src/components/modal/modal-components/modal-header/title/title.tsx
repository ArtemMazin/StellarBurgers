import React from 'react';
import styles from './title.module.css';
import { useResize } from '@/hooks/useResize';

type TTitleProps = {
  title: string;
};

export default function Title({ title }: TTitleProps) {
  const { isMobile } = useResize();

  return (
    <h2
      className={`${styles.title} ${
        isMobile ? 'text text_type_main-medium' : 'text text_type_main-large'
      }`}
    >
      {title}
    </h2>
  );
}
