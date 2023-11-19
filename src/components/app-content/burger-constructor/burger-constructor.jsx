import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import BurgerComponents from './burger-components/burger-components';

function BurgerConstructor() {
  return (
    <section className="pt-25 pl-4 pr-4">
      <BurgerComponents />
      <div>
        <div>
          <span className="text text_type_digits-medium">123</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
