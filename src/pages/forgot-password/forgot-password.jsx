import React from 'react';
import styles from './forgot-password.module.css';
import Form from '@/components/form/form';
import { Link } from 'react-router-dom';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ForgotPassword() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Form title={'Восстановление пароля'} textButton={'Восстановить'}>
          <Input
            type={'email'}
            placeholder={'Укажите e-mail'}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </Form>

        <div>
          <p className="text text_type_main-default text_color_inactive mb-4">
            Вспомнили пароль?{' '}
            <Link to="/login" className={styles.link}>
              Войти
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default ForgotPassword;
