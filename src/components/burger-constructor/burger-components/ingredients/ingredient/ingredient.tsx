import React, { useCallback, useRef } from 'react';
import { updateIngredients, deleteIngredient } from '@/services/constructor/constructor-slice';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import styles from './ingredient.module.css';
import { ItemTypes } from '@/utils/drag-configs';
import { TIngredient } from '@/utils/types';
import { Identifier } from 'dnd-core';
import { useAppDispatch } from '@/redux-hooks';

type TDragObject = {
  id: string;
  index: number;
};

type TCollectedProps = {
  isDragging: boolean;
};

type TDropCollectedProps = {
  handlerId: Identifier | null;
};

type TIngredientProps = {
  card: TIngredient;
  index: number;
  id: string;
  ingredients: TIngredient[];
};

function Ingredient({ card, index, id, ingredients }: TIngredientProps) {
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLDivElement | null>(null);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = ingredients[dragIndex];
      const ingredientsArray = [...ingredients];
      ingredientsArray.splice(dragIndex, 1);
      ingredientsArray.splice(hoverIndex, 0, dragCard);

      dispatch(updateIngredients(ingredientsArray));
    },
    [dispatch, ingredients],
  );
  const [{ handlerId }, drop] = useDrop<TDragObject, unknown, TDropCollectedProps>({
    accept: ItemTypes.SORTER,
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
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

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

  const [{ isDragging }, drag] = useDrag<TDragObject, unknown, TCollectedProps>({
    type: ItemTypes.SORTER,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const getStyles = (isDragging: boolean) => {
    return {
      opacity: isDragging ? 0 : 1,
      transform: isDragging ? 'scale(0.8)' : '',
    };
  };

  drag(drop(ref));

  const filteredCards = [...ingredients].filter((item) => item.customId !== card.customId);
  return (
    <div
      className={styles.ingredient}
      ref={ref}
      data-handler-id={handlerId}
      style={getStyles(isDragging)}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={card.name}
        price={card.price}
        thumbnail={card.image}
        extraClass={styles.element}
        handleClose={() => dispatch(deleteIngredient(filteredCards))}
      />
    </div>
  );
}

export default Ingredient;
