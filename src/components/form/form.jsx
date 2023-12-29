import React from 'react';
import styles from './form.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

function Form({
  title,
  textButton,
  textButtonReset,
  handle,
  handleReset,
  isVisibleButtons = true,
  isFormValid,
  children,
}) {
  return (
    <form className={styles.form} noValidate onSubmit={handle}>
      {title && <h1 className={`text text_type_main-medium ${styles.title}`}>{title}</h1>}
      {children}
      {isVisibleButtons && (
        <div className={`${textButtonReset && styles.buttonContainer}`}>
          {textButtonReset && (
            <Button htmlType="button" type="secondary" onClick={handleReset}>
              {textButtonReset}
            </Button>
          )}
          <Button htmlType="submit" disabled={!isFormValid}>
            {textButton}
          </Button>
        </div>
      )}
    </form>
  );
}

export default Form;

Form.propTypes = {
  title: PropTypes.string,
  textButton: PropTypes.string,
  textButtonReset: PropTypes.string,
  handle: PropTypes.func.isRequired,
  handleReset: PropTypes.func,
  isVisibleButtons: PropTypes.bool,
  isFormValid: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]),
};
