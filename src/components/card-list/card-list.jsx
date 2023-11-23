import React from 'react';
import PropTypes from 'prop-types';
import Card from './card/card';
import styles from './card-list.module.css';
import useModal from '@/hooks/useModal';
import Modal from '../modal/modal';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import ingredientPropTypes from '@/utils/prop-types';

export default function CardList({ array }) {
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
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleClose} title={'Детали ингредиента'}>
          <IngredientDetails card={cardData} />
        </Modal>
      )}
    </>
  );
}

CardList.propTypes = {
  array: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
