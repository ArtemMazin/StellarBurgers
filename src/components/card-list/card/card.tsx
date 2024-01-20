/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './card.module.css';
import { Button, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import useCounter from '@/hooks/useCounter';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';
import { ItemTypes, config } from '@/utils/drag-configs';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import { useResize } from '@/hooks/useResize';
import { TIngredient } from '@/utils/types';
import { useAppDispatch, useAppSelector } from '@/redux-hooks';

type TCardProps = {
  item: TIngredient;
};

export default function Card({ item }: TCardProps) {
  const ingredients = useAppSelector(allIngredients);
  const bun = useAppSelector(selectedBun);

  const location = useLocation();

  const { isMobile } = useResize();

  const count = useCounter(bun, ingredients, item);

  const dispatch = useAppDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.INGREDIENT,
    item: item._id,
    end: (elem, monitor) => {
      const dropResult = monitor.getDropResult();

      if (elem && item.type === config.BUN.type && dropResult) {
        dispatch(config.BUN.action(item));
      }
      if (elem && item.type === config.MAIN.type && dropResult) {
        dispatch(config.MAIN.action(item));
      }
      if (elem && item.type === config.SAUCE.type && dropResult) {
        dispatch(config.SAUCE.action(item));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const getStyles = (isDragging: boolean) => {
    return {
      opacity: isDragging ? 0.5 : 1,
    };
  };

  const handleAddButton = () => {
    if (item.type === config.BUN.type) {
      dispatch(config.BUN.action(item));
    }
    if (item.type === config.MAIN.type) {
      dispatch(config.MAIN.action(item));
    }
    if (item.type === config.SAUCE.type) {
      dispatch(config.SAUCE.action(item));
    }
  };

  return (
    <div ref={drag} className={styles.card}>
      <Link
        to={`/ingredients/${item._id}`}
        state={{ background: location }}
        style={getStyles(isDragging)}
        className={styles.link}
      >
        {count > 0 && <Counter count={count} />}

        <div>
          <img src={isMobile ? item.image_mobile : item.image} alt={item.name} />
        </div>

        <div className={`${styles.price} text text_type_digits-default`}>
          {item.price}
          <CurrencyIcon type="primary" />
        </div>
        <h3 className={`text ${isMobile ? 'text_type_main-small' : ' text_type_main-default'}`}>
          {item.name}
        </h3>
      </Link>
      {isMobile && (
        <Button
          htmlType="button"
          type="secondary"
          size="small"
          extraClass={styles.button}
          onClick={handleAddButton}
        >
          Добавить
        </Button>
      )}
    </div>
  );
}
