import React from 'react';
import PropTypes from 'prop-types';
import styles from './base.module.css';
import useDropHook from '@/hooks/useDropHook';
import { ItemTypes } from '@/utils/drag-configs';

function Base({ styleType }) {
  const { isActive, canDrop } = useDropHook(ItemTypes.INGREDIENT);

  let boxShadow = '';
  if (isActive) {
    boxShadow = '';
  } else if (canDrop) {
    boxShadow = '0px 0px 20px rgba(76, 76, 255, 0.4), -0px -0px 20px rgba(76, 76, 255, 0.4)';
  }

  return (
    <div
      style={{ boxShadow }}
      className={`${styles.base} ${styleType === 'top' && styles.base_top} 
      ${styleType === 'bottom' && styles.base_bottom} ml-8 mr-3`}
    ></div>
  );
}

export default Base;

Base.propTypes = {
  styleType: PropTypes.oneOf(['top', 'bottom']),
};
