import React from 'react';
import PropTypes from 'prop-types';
import styles from './category.module.css';

type TCategoryProps = {
  text: string;
  value: number;
};

export default function Category({ text, value }: TCategoryProps) {
  return (
    <div className={styles.category}>
      <span className="text text_type_main-default text_color_inactive">{text}</span>
      <span className="text text_type_digits-default text_color_inactive">{value}</span>
    </div>
  );
}

Category.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
