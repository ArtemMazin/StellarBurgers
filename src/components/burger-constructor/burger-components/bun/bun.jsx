import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './bun.module.css';
import ingredientPropTypes from '@/utils/prop-types';
import { useResize } from '@/hooks/useResize';

export default function Bun({ bun, type, text }) {
  const { isMobile } = useResize();

  return (
    <div className={`${styles.component} ${isMobile ? 'ml-6' : 'ml-8'} mr-3`}>
      <ConstructorElement
        type={type}
        isLocked={true}
        text={`${bun.name} ${text}`}
        price={bun.price}
        thumbnail={bun.image}
        extraClass={styles.element}
      />
    </div>
  );
}

Bun.propTypes = {
  //typeof null === 'object'
  bun: PropTypes.oneOfType([PropTypes.object.isRequired, ingredientPropTypes.isRequired]),
  type: PropTypes.oneOf(['top', 'bottom', undefined]),
  text: PropTypes.string,
};
