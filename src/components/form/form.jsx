/* eslint-disable react/prop-types */
import React from 'react';
import styles from './form.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function Form({
  title,
  textButton,
  textButtonReset,
  handle,
  isVisibleButtons = true,
  isFormValid,
  children,
}) {
  return (
    <form className={styles.form} noValidate onSubmit={handle}>
      {title && <h1 className="text text_type_main-medium">{title}</h1>}
      {children}
      {isVisibleButtons && (
        <div className={`${textButtonReset && styles.buttonContainer}`}>
          {textButtonReset && (
            <Button htmlType="button" type="secondary" size="medium">
              {textButtonReset}
            </Button>
          )}
          <Button htmlType="submit" type="primary" size="medium" disabled={!isFormValid}>
            {textButton}
          </Button>
        </div>
      )}
    </form>
  );
}

export default Form;
