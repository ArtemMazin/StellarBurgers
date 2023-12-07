import React from 'react';
import PropTypes from 'prop-types';
import styles from './groups-of-ingredients.module.css';
import CardList from '@/components/card-list/card-list';
import ingredientPropTypes from '@/utils/prop-types';

export default function GroupsOfIngredients({ ingredientsGroup, title }) {
  return (
    <div className={`${styles.ingredients} mt-10`}>
      <h2 className="text text_type_main-medium">{title}</h2>
      <CardList ingredientsGroup={ingredientsGroup} />
    </div>
  );
}

GroupsOfIngredients.propTypes = {
  ingredientsGroup: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  title: PropTypes.string.isRequired,
};
