/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-card.module.css';
import ImageList from './image-list/image-list';
import { Link, useLocation } from 'react-router-dom';
import { URL } from '@/utils/url-config';

const OrderCard = () => {
  const location = useLocation();

  const path = location.pathname;

  return (
    <Link
      to={`${path === '/' + URL.FEED ? '/feed/12345' : '/profile/orders/5'}`}
      className={`p-6 ${styles.card}`}
      state={{ background: location }}
    >
      <div className={styles.order_id}>
        <span className="text text_type_digits-default">#034535</span>
        <span className="text text_type_main-small text_color_inactive">Сегодня, 16:20</span>
      </div>
      <div>
        <span className="text text_type_main-medium">Death Star Starship Main бургер</span>
      </div>
      <div className={styles.ingredients}>
        <ImageList />
        <div className={styles.price}>
          <span className="text text_type_digits-default">480</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
  );
};
export default OrderCard;
