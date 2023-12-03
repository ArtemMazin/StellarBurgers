/* eslint-disable react/prop-types */
import { updateIngredients, deleteIngredient } from '@/services/constructor/constructor-slice';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useCallback, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';

function Ingredient({ card, index, id, ingredients }) {
  const dispatch = useDispatch();

  const ref = useRef(null);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = ingredients[dragIndex];
      const ingredientsArray = [...ingredients];
      ingredientsArray.splice(dragIndex, 1);
      ingredientsArray.splice(hoverIndex, 0, dragCard);

      dispatch(updateIngredients(ingredientsArray));
    },
    [dispatch, ingredients],
  );
  const [{ handlerId }, drop] = useDrop({
    accept: 'card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const filteredCards = [...ingredients].filter((item) => item.customId !== card.customId);
  return (
    <div ref={ref} data-handler-id={handlerId} style={{ opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={card.name}
        price={card.price}
        thumbnail={card.image}
        handleClose={() => dispatch(deleteIngredient(filteredCards))}
      />
    </div>
  );
}

export default Ingredient;
