import React from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-order.module.css';
import Modal from '@/components/modal/modal';
import OrderDetails from '@/components/modal/order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import useTotalPrice from '@/hooks/useTotalPrice';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';
import { currentOrder, orderStatus, orderError } from '@/services/order/selectors';
import { createOrder, removeOrder } from '@/services/order/order-slice';
import { deleteAllIngredients } from '@/services/constructor/constructor-slice';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { URL } from '@/utils/url-config';
import useStatus from '@/hooks/useStatus';
import { toast } from 'react-toastify';
import { messages } from '@/utils/constants';
import { useResize } from '@/hooks/useResize';

function BurgerOrder() {
  const ingredients = useSelector(allIngredients);
  const bun = useSelector(selectedBun);
  const order = useSelector(currentOrder);
  const status = useSelector(orderStatus);
  const error = useSelector(orderError);

  const totalPrice = useTotalPrice(ingredients, bun);

  const [toggleHideMenu] = useOutletContext();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isMobile } = useResize();

  function getAllId(bun, ingredients) {
    const ingredientsID = ingredients.map((item) => item._id);
    ingredientsID.push(bun._id);
    ingredientsID.unshift(bun._id);
    const allID = ingredientsID;

    return allID;
  }

  const handleOrder = (e) => {
    e.preventDefault();

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
      .catch((err) => {
        toast.error(err);
      });

    dispatch(deleteAllIngredients());
  };

  const textButton = useStatus(
    <span>Оформляем...</span>,
    <span>Оформить заказ</span>,
    status,
    error,
  );

  const handleOrderClose = () => {
    dispatch(removeOrder());
  };

  return (
    <div className={styles.order}>
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
        <Button
          htmlType="button"
          type="primary"
          size="small"
          extraClass="ml-2"
          onClick={toggleHideMenu}
        >
          Смотреть заказ
        </Button>
      ) : (
        <Button htmlType="button" type="primary" size="large" onClick={handleOrder}>
          {textButton}
        </Button>
      )}

      {order && (
        <Modal isOpen={order} onClose={handleOrderClose}>
          <OrderDetails order={order} />
        </Modal>
      )}
    </div>
  );
}

export default BurgerOrder;
