import React from 'react';
import styles from './order-details.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredients from './ingredients/ingredients';
import { useAppSelector } from '@/redux-hooks';
import { useParams } from 'react-router-dom';
import useOrder from '@/hooks/useOrder';
import useDate from '@/hooks/useDate';
import { ordersSelector } from '@/services/order-feed/order-feed-selectors';

const OrderDetails = () => {
  const { number } = useParams();

  const orders = useAppSelector(ordersSelector);

  const order = useOrder(orders, number);

  const date = useDate(order!.createdAt);

  return (
    <>
      <div className="mb-15">
        <h3 className="mb-2 text text_type_main-medium">{order?.name}</h3>
        <span className={`text text_type_main-default ${styles.status}`}>Выполнен</span>
      </div>
      <div className="mb-10">
        <h3 className="mb-6 text text_type_main-medium">Состав:</h3>
        <Ingredients />
      </div>
      <div className={`mb-10 ${styles.total_price}`}>
        <span className="text text_type_main-default text_color_inactive">{date}</span>
        <div className={styles.price}>
          <span className="text text_type_digits-default">480</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
