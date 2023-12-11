/* eslint-disable react/prop-types */
import React from 'react';
import styles from './form.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function Form({ title, textButton, textButtonReset, handleRegister, children }) {
  return (
    <form className={styles.form} noValidate onSubmit={handleRegister}>
      {title && <h1 className="text text_type_main-medium">{title}</h1>}
      {children}
      <div className={`${textButtonReset && styles.buttonContainer}`}>
        {textButtonReset && (
          <Button htmlType="button" type="secondary" size="medium">
            {textButtonReset}
          </Button>
        )}
        <Button htmlType="submit" type="primary" size="medium">
          {textButton}
        </Button>
      </div>
    </form>
  );
}

export default Form;
