import React from 'react';
import styles from './order-details.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredients from './ingredients/ingredients';

const OrderDetails = () => {
  return (
    <>
      <div className="mb-15">
        <h3 className="mb-2 text text_type_main-medium">Black Hole Singularity острый бургер</h3>
        <span className={`text text_type_main-default ${styles.status}`}>Выполнен</span>
      </div>
      <div className="mb-10">
        <h3 className="mb-6 text text_type_main-medium">Состав:</h3>
        <Ingredients />
      </div>
      <div className={`mb-10 ${styles.total_price}`}>
        <span className="text text_type_main-default text_color_inactive">Вчера, 13:50</span>
        <div className={styles.price}>
          <span className="text text_type_digits-default">480</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
