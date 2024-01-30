import React from 'react';
import styles from './board.module.css';
import { ordersSelector } from '@/services/order-feed/order-feed-selectors';
import { useAppSelector } from '@/redux-hooks';

const Board = () => {
  const ordersFinished = useAppSelector(ordersSelector)
    ?.filter((item) => item.status === 'done')
    .slice(0, 10);
  const ordersInWork = useAppSelector(ordersSelector)
    ?.filter((item) => item.status === 'pending')
    .slice(0, 10);

  return (
    <div className={styles.board}>
      <div>
        <h2 className="mb-6 text text_type_main-medium">Готовы:</h2>
        <ul className={`${styles.numbers} ${styles.numbers_accent}`}>
          {ordersFinished?.map((order) => (
            <li key={order._id}>
              <span className="text text_type_digits-default">{order.number}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text text_type_main-medium">В работе:</h2>
        <ul className={styles.numbers}>
          {ordersInWork?.map((order) => (
            <li key={order._id}>
              <span className="text text_type_digits-default">{order.number}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Board;
