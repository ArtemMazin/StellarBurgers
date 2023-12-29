import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-container.module.css';
import { useResize } from '@/hooks/useResize';

export default function Container({ children }) {
  const { isMobile } = useResize();

  return (
    <div className={`${styles.container} ${isMobile ? 'pl-2 pr-2' : 'pl-10 pr-10'}`}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]),
};
