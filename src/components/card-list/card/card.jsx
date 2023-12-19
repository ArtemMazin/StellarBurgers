/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientPropTypes from '@/utils/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import useCounter from '@/hooks/useCounter';
import { allIngredients, selectedBun } from '@/services/constructor/selectors';
import { ItemTypes, config } from '@/utils/drag-configs';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import { useResize } from '@/hooks/useResize';

export default function Card({ item }) {
  const ingredients = useSelector(allIngredients);
  const bun = useSelector(selectedBun);

  const location = useLocation();

  const { isMobile } = useResize();

  const count = useCounter(bun, ingredients, item);

  const dispatch = useDispatch();

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

  const getStyles = (isDragging) => {
    return {
      opacity: isDragging ? 0.5 : 1,
    };
  };

  return (
    <Link
      className={`${styles.card} p-1`}
      ref={drag}
      style={getStyles(isDragging)}
      to={`/ingredients/${item._id}`}
      state={{ background: location }}
    >
      {count > 0 && <Counter count={count} size="default" extraClass="" />}
      <div>
        <img src={isMobile ? item.image_mobile : item.image} alt={item.name} />
      </div>
      <div className={`${styles.price} text text_type_digits-default`}>
        {item.price}
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default">{item.name}</h3>
    </Link>
  );
}

Card.propTypes = {
  item: ingredientPropTypes.isRequired,
};
