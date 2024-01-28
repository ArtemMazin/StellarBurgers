/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-card.module.css';
import ImageList from './image-list/image-list';
import { Link, useLocation } from 'react-router-dom';
import { URL } from '@/utils/url-config';
import { TOrder } from '@/utils/types';

type TOrderCardProps = {
  order: TOrder;
};

const OrderCard = ({ order }: TOrderCardProps) => {
  const location = useLocation();

  const path = location.pathname;

  const date = new Date(order.createdAt);
  const hours = date.getHours();
  const minutes =
    date.getMinutes().toString().length > 1 ? date.getMinutes() : '0' + date.getMinutes();

  return (
    <Link
      to={`${
        path === '/' + URL.FEED ? '/feed/' + order.number : '/profile/orders/' + order.number
      }`}
      className={`p-6 ${styles.card}`}
      state={{ background: location }}
    >
      <div className={styles.order_id}>
        <span className="text text_type_digits-default">{'#' + order.number}</span>
        <span className="text text_type_main-small text_color_inactive">
          {'Сегодня, ' + hours + ':' + minutes}
        </span>
      </div>
      <div>
        <span className="text text_type_main-medium">{order.name}</span>
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
