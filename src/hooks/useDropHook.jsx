import React from 'react';
import { useDrop } from 'react-dnd';

function useDropHook(itemType) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: itemType,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  return { drop, canDrop, isActive };
}

export default useDropHook;
