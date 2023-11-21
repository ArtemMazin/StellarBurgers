/* eslint-disable react/prop-types */
import React from 'react';
import Card from './card/card';
import styles from './card-list.module.css';
import useModal from '@/hooks/useModal';
import Modal from '../modal/modal';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';

const CardList = ({ array }) => {
  const { isModalOpen, handleOpen, handleClose, cardData } = useModal();

  return (
    <>
      <ul className={`${styles.list} pl-3 pr-2 pt-6`}>
        {array.length > 0 &&
          array.map((item) => (
            <li key={item._id}>
              <Card item={item} handleOpen={handleOpen} />
            </li>
          ))}
      </ul>
      <Modal isOpen={isModalOpen} onClose={handleClose} title={'Детали ингредиента'}>
        <IngredientDetails card={cardData} />
      </Modal>
    </>
  );
};

export default CardList;
