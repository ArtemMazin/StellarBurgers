import React from 'react';
import styles from './title.module.css';
import { useResize } from '@/hooks/useResize';

type TTitleProps = {
  title: string;
  type?: 'text' | 'digits';
};

export default function Title({ title, type }: TTitleProps) {
  const { isMobile } = useResize();

  return (
    <h2
      className={`text ${styles.title} ${
        type === 'text'
          ? isMobile
            ? 'text_type_main-medium'
            : 'text_type_main-large'
          : 'text_type_digits-default'
      }`}
    >
      {title}
    </h2>
  );
}
