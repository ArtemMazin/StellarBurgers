import React from 'react';
import styles from './form.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

type TFormProps = {
  title: string;
  textButton: string;
  textButtonReset?: string;
  handle: (e: React.FormEvent) => void;
  handleReset?: () => void;
  isVisibleButtons?: boolean;
  isFormValid: boolean;
  children: React.ReactNode;
};

function Form({
  title,
  textButton,
  textButtonReset,
  handle,
  handleReset,
  isVisibleButtons = true,
  isFormValid,
  children,
}: TFormProps) {
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
