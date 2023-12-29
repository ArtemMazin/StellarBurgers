import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-header.module.css';
import { useResize } from '@/hooks/useResize';

export default function Header({ children }) {
  const { isMobile } = useResize();

  return (
    <div className={`${styles.header} ${isMobile ? 'pt-4 pb-4 mb-4' : 'pt-10 mb-4'}`}>
      {children}
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]),
};
