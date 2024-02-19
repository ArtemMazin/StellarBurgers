import React from 'react';
import Board from './board/board';
import {
  totalOrdersSelector,
  totalTodayOrdersSelector,
} from '@/services/order-feed/order-feed-selectors';
import { useAppSelector } from '@/redux-hooks';
import { useResize } from '@/hooks/useResize';

const Stats = () => {
  const { isMobile } = useResize();

  const totalOrders = useAppSelector(totalOrdersSelector);
  const totalTodayOrders = useAppSelector(totalTodayOrdersSelector);

  return (
    <>
      <Board />
      <div>
        <h2
          className={`text ${isMobile ? 'text_type_main-default pt-6' : 'text_type_main-medium'}`}
        >
          Выполнено за все время:
        </h2>
        <div className={`text ${isMobile ? 'text_type_digits-medium' : 'text_type_digits-large'}`}>
          {totalOrders}
        </div>
      </div>
      <div>
        <h2
          className={`text ${isMobile ? 'text_type_main-default pt-6' : 'text_type_main-medium'}`}
        >
          Выполнено за сегодня:
        </h2>
        <div className={`text ${isMobile ? 'text_type_digits-medium' : 'text_type_digits-large'}`}>
          {totalTodayOrders}
        </div>
      </div>
    </>
  );
};

export default Stats;
