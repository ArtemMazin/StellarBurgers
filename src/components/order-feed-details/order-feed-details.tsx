import React from 'react';
import styles from './order-feed-details.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredients from './ingredients/ingredients';
import useDate from '@/hooks/useDate';
import { TIngredient, TOrder } from '@/utils/types';

type TOrderFeedDetailsProps = {
  order: TOrder;
  items: TIngredient[];
};

const OrderFeedDetails = ({ order, items }: TOrderFeedDetailsProps) => {
  const date = useDate(order && order.createdAt);

  // const price = items.reduce((acc, item) => (acc += item!.price), 0);
  console.log(order.status);

  return (
    <>
      <div className="mb-15">
        <h3 className="mb-2 text text_type_main-medium">{order?.name}</h3>
        <span className={`text text_type_main-default ${styles.status}`}>{order.status}</span>
      </div>
      <div className="mb-10">
        <h3 className="mb-6 text text_type_main-medium">Состав:</h3>
        <Ingredients items={items} />
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

export default OrderFeedDetails;
