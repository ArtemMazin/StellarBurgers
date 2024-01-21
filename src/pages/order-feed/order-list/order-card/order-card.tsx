/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-card.module.css';
import ImageList from './image-list/image-list';
import Modal from '@/components/modal/modal';
import OrderDetails from './order-details/order-details';

const OrderCard = () => {
  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false);
  };
  return (
    <div className={`p-6 ${styles.card}`} onClick={() => setModal(!modal)}>
      <div className={styles.order_id}>
        <span className="text text_type_digits-default">#034535</span>
        <span className="text text_type_main-small text_color_inactive">Сегодня, 16:20</span>
      </div>
      <div>
        <span className="text text_type_main-medium">Death Star Starship Main бургер</span>
      </div>
      <div className={styles.ingredients}>
        <ImageList />
        <div className={styles.price}>
          <span className="text text_type_digits-default">480</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      {modal && (
        <Modal isOpen={{}} onClose={handleClose} title="#034533" title_type="digits">
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};
export default OrderCard;
