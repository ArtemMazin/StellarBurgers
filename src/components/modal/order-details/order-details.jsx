import React from 'react';
import PropTypes from 'prop-types';
import styles from './order-details.module.css';
import { useResize } from '@/hooks/useResize';

export default function OrderDetails({ order }) {
  const { isMobile } = useResize();

  return (
    <div className={styles.container}>
      <p className={`text text_type_digits-large mb-8 ${isMobile && styles.number}`}>
        {order && order.number}
      </p>
      <p className={`text text_type_main-medium ${isMobile ? '' : 'mb-15'}`}>
        идентификатор заказа
      </p>
      <div className={`${styles.image} pt-15 pb-15`}></div>
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

OrderDetails.propTypes = {
  order: PropTypes.shape({
    number: PropTypes.number,
  }).isRequired,
};
