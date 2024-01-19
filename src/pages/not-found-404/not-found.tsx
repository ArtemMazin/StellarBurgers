import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './not-found.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Страница не найдена</p>
      <Button htmlType="button" type="secondary" size="medium" onClick={() => navigate(-1)}>
        Назад
      </Button>
    </main>
  );
};

export default NotFound;
