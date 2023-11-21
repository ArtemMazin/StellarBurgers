import { useState } from 'react';

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpen() {
    setIsModalOpen(true);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  return { isModalOpen, handleOpen, handleClose };
}

export default useModal;
