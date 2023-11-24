import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.css';

export default function Title({ title }) {
  return <h2 className={`${styles.title} text text_type_main-large`}>{title}</h2>;
}

Title.propTypes = {
  title: PropTypes.string,
};
