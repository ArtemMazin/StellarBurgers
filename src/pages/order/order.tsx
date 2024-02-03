import React, { useEffect } from 'react';
import { initialIngredients } from '@/services/initial-ingredients/selectors';
import { useAppDispatch, useAppSelector } from '@/redux-hooks';
import OrderFeedDetails from '@/components/order-feed-details/order-feed-details';
import { useParams } from 'react-router-dom';
import { getOrderById } from '@/services/order/order-slice';
import { getIngredients } from '@/services/initial-ingredients/initial-ingredients-slice';
import styles from './order.module.css';

function Order() {
  const { number } = useParams();

  const ingredients = useAppSelector(initialIngredients);
  const order = useAppSelector((store) => {
    let order =
      store.orders.orders && number && store.orders.orders.find((o) => o.number === +number);
    if (order) {
      return order;
    }

    order =
      store.historyOrders.orders &&
      number &&
      store.historyOrders.orders.find((o) => o.number === +number);
    if (order) {
      return order;
    }

    return store.order.currentOrder;
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIngredients());
    if (!order && number) {
      dispatch(getOrderById(number));
    }
  }, [dispatch, number, order]);

  if (!order) {
    return null;
  }

  const items = order.ingredients.map((order) =>
    ingredients.find((ingredient) => ingredient._id === order),
  );

  const price = items?.reduce((acc, item) => (acc += item!.price), 0);

  return (
    <div className={styles.container}>
      <span className={`${styles.number} text_type_digits-default`}>#{order.number}</span>
      <OrderFeedDetails order={order} items={items} price={price} />
    </div>
  );
}

export default Order;
