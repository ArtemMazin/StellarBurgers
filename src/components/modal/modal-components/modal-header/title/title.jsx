import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.css';
import { useResize } from '@/hooks/useResize';

export default function Title({ title }) {
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

Title.propTypes = {
  title: PropTypes.string,
};
