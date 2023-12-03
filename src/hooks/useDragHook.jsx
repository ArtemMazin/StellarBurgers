import React from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';

function useDragHook(dragItem, itemType, ...config) {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: itemType,
    item: dragItem._id,
    end: (elem, monitor) => {
      const dropResult = monitor.getDropResult();

      config.map((configItem) => {
        if (elem && dragItem.type === configItem.type && dropResult) {
          dispatch(configItem.action(dragItem));
        }
      });
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return { isDragging, drag };
}

export default useDragHook;
