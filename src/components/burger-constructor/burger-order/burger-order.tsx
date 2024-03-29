import React from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-order.module.css';
import Modal from '@/components/modal/modal';
import OrderDetails from '@/components/modal/order-details/order-details';
import useTotalPrice from '@/hooks/useTotalPrice';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';
import { currentOrder, orderStatus } from '@/services/order/selectors';
import { createOrder, removeOrder } from '@/services/order/order-slice';
import { deleteAllIngredients } from '@/services/constructor/constructor-slice';
import { useNavigate } from 'react-router-dom';
import { URL } from '@/utils/url-config';
import useStatus from '@/hooks/useStatus';
import { toast } from 'react-toastify';
import { messages } from '@/utils/constants';
import { useResize } from '@/hooks/useResize';
import { useConstructor } from '@/components/layout/layout';
import { TIngredient } from '@/utils/types';
import { useAppDispatch, useAppSelector } from '@/redux-hooks';

function BurgerOrder() {
  const [isConstructorOpen, showConstructor] = useConstructor();

  const ingredients = useAppSelector(allIngredients);
  const bun = useAppSelector(selectedBun);
  const order = useAppSelector(currentOrder);
  const status = useAppSelector(orderStatus);

  const totalPrice = useTotalPrice(ingredients, bun);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { isMobile } = useResize();

  function getAllId(bun: TIngredient, ingredients: TIngredient[]) {
    const ingredientsID = ingredients.map((item) => item._id);
    ingredientsID.push(bun._id);
    ingredientsID.unshift(bun._id);
    const allID = ingredientsID;

    return allID;
  }

  const handleOrder = () => {
    if (status === 'loading') {
      toast.warn(messages.WARN_ORDER_WAITING);
      return;
    }
    if (!localStorage.getItem('accessToken')) {
      toast.error(messages.ERROR_ORDER_LOGIN);
      navigate(URL.LOGIN);
      return;
    }
    if (!bun || ingredients.length <= 0) {
      toast.error(messages.ERROR_ORDER_INGREDIENTS);
      return;
    }

    toast.success(messages.SUCCESS_ORDER);
    dispatch(createOrder(getAllId(bun, ingredients)))
      .unwrap()
      .catch((err: unknown) => {
        if (err instanceof Error) {
          toast.error(err.message);
        }
      });
    dispatch(deleteAllIngredients());
  };

  const textButton = useStatus({
    loading: <span>Оформляем...</span>,
    content: <span>Оформить заказ</span>,
    status,
  });

  const handleOrderClose = () => {
    dispatch(removeOrder());
  };

  return (
    <div className={`${styles.order} ${isConstructorOpen && styles.order_active}`}>
      <div className={styles.price}>
        <span
          className={`text ${
            isMobile ? 'text_type_digits-default pr-2' : 'text_type_digits-medium pr-2'
          }`}
        >
          {totalPrice}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      {isMobile ? (
        isConstructorOpen ? (
          <Button htmlType="button" size="small" extraClass="ml-2" onClick={handleOrder}>
            {textButton}
          </Button>
        ) : (
          <Button htmlType="button" size="small" extraClass="ml-2" onClick={showConstructor}>
            Смотреть заказ
          </Button>
        )
      ) : (
        <Button htmlType="button" size="large" onClick={handleOrder}>
          {textButton}
        </Button>
      )}

      {order && (
        <Modal
          isOpen={order}
          onClose={handleOrderClose}
          title={`${isMobile ? 'Заказ оформлен' : ''}`}
        >
          <OrderDetails order={order} />
        </Modal>
      )}
    </div>
  );
}

export default BurgerOrder;
