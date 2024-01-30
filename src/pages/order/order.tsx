import React, { useEffect } from 'react';
import { errorIngredients, initialIngredients } from '@/services/initial-ingredients/selectors';
import { useAppDispatch, useAppSelector } from '@/redux-hooks';
import OrderFeedDetails from '@/components/order-feed-details/order-feed-details';
import { useMatch, useParams } from 'react-router-dom';
import { historyOrdersSelector } from '@/services/history-orders/history-orders-selectors';
import { ordersSelector } from '@/services/order-feed/order-feed-selectors';

function Order() {
  const { number } = useParams();

  const dispatch = useAppDispatch();

  const match = useMatch('/profile/orders');

  const orders = useAppSelector(match ? historyOrdersSelector : ordersSelector);
  const ingredients = useAppSelector(initialIngredients);

  console.log(orders);

  // useEffect(() => {
  //   if (!orders) {
  //   }
  // }, []);
  return (
    <div className="container mt-30">
      {
        // <OrderFeedDetails />
      }
    </div>
  );
}

export default Order;
