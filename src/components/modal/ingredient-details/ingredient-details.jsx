/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ingredient-details.module.css';

export default function IngredientDetails({ card }) {
  return (
    <div className={styles.container}>
      <img src={card.image_large} alt={card.name} className={`${styles.image} mb-4`} />
      <p className="text text_type_main-medium mb-8">{card.name}</p>
      <div className={`${styles.composition} mb-15`}>
        <div className={styles.cell}>
          <span className="text text_type_main-default text_color_inactive">Калории,ккал</span>
          <span className="text text_type_digits-default text_color_inactive">{card.calories}</span>
        </div>
        <div className={styles.cell}>
          <span className="text text_type_main-default text_color_inactive">Белки, г</span>
          <span className="text text_type_digits-default text_color_inactive">{card.proteins}</span>
        </div>
        <div className={styles.cell}>
          <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
          <span className="text text_type_digits-default text_color_inactive">{card.fat}</span>
        </div>
        <div className={styles.cell}>
          <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
          <span className="text text_type_digits-default text_color_inactive">
            {card.carbohydrates}
          </span>
        </div>
      </div>
    </div>
  );
}
