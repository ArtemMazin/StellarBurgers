import React, { useEffect, useMemo } from 'react';
import { errorIngredients, initialIngredients } from '@/services/initial-ingredients/selectors';
import { useAppDispatch, useAppSelector } from '@/redux-hooks';
import OrderFeedDetails from '@/components/order-feed-details/order-feed-details';
import { useMatch, useParams } from 'react-router-dom';
import { historyOrdersSelector } from '@/services/history-orders/history-orders-selectors';
import { ordersSelector } from '@/services/order-feed/order-feed-selectors';
import { onClose, wsConnect } from '@/services/order-feed/order-feed-slice';

function Order() {
  const { number } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wsConnect('wss://norma.nomoreparties.space/orders/all'));

    return () => {
      dispatch(onClose());
    };
  }, [dispatch]);

  const orders = useAppSelector(ordersSelector);
  const ingredients = useAppSelector(initialIngredients);

  const selectedIngredient = useMemo(() => {
    return orders?.find((el) => el.number === Number(number));
  }, [orders, number]);

  const items = selectedIngredient?.ingredients.map((order) =>
    ingredients.find((ingredient) => ingredient._id === order),
  );

  const price = items?.reduce((acc, item) => (acc += item!.price), 0);

  console.log(price, selectedIngredient);

  // useEffect(() => {
  //   if (!orders) {
  //   }
  // }, []);
  return (
    <div className="container mt-30">
      {selectedIngredient && price && (
        <OrderFeedDetails order={selectedIngredient} items={ingredients} price={price} />
      )}
    </div>
  );
}

export default Order;
