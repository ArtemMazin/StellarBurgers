import React, { useEffect } from 'react';
import { errorIngredients } from '@/services/initial-ingredients/selectors';
import { useAppDispatch, useAppSelector } from '@/redux-hooks';
import OrderFeedDetails from '@/components/order-feed-details/order-feed-details';

function Order() {
  return (
    <div className="container mt-30">
      {
        // <OrderFeedDetails />
      }
    </div>
  );
}

export default Order;
