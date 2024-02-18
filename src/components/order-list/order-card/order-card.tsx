/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-card.module.css';
import ImageList from './image-list/image-list';
import { Link, useLocation, useMatch } from 'react-router-dom';
import { TIngredient, TOrder } from '@/utils/types';
import { useOrderStatus } from '@/hooks/useOrderStatus';
import { useResize } from '@/hooks/useResize';

type TOrderCardProps = {
  order: TOrder;
  ingredients: TIngredient[];
};

const OrderCard = ({ order, ingredients }: TOrderCardProps) => {
  const { isMobile } = useResize();

  const location = useLocation();

  const match = useMatch('/feed');

  const items = order.ingredients.reduce((acc, order) => {
    const item = ingredients.find((ingredient) => ingredient._id === order);

    if (!item) return acc;

    acc.push(item);

    return acc;
  }, [] as TIngredient[]);

  const status = useOrderStatus(order);

  const price = items.reduce((acc, item) => (acc += item.price), 0);

  return (
    <Link
      to={`${match ? `/feed/${order.number}` : `/profile/orders/${order.number}`}`}
      className={`p-6 ${styles.card}`}
      state={{ background_order: location, order, items, price }}
    >
      <div className={styles.order_id}>
        <span className="text text_type_digits-default">{'#' + order.number}</span>
        <FormattedDate
          date={new Date(order.createdAt)}
          className="text_type_main-small text_color_inactive"
        />
      </div>
      <div>
        <span
          className={`${isMobile ? 'text text_type_main-default' : 'text text_type_main-medium'}`}
        >
          {order.name}
        </span>
        <span
          className={`text text_type_main-default ${styles.status} ${
            status === 'Выполнен' && styles.status_accent
          }`}
        >
          {!match && status}
        </span>
      </div>
      <div className={styles.ingredients}>
        <ImageList items={items} />
        <div className={styles.price}>
          <span className="text text_type_digits-default">{price}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
  );
};
export default OrderCard;
