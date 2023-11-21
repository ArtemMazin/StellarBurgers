import { useState } from 'react';

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardData, setCardData] = useState({});

  function handleOpen(card) {
    setIsModalOpen(true);
    card && setCardData(card);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  return { isModalOpen, handleOpen, handleClose, cardData };
}

export default useModal;
