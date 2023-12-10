import React from 'react';
import styles from './reset-password.module.css';
import { Link } from 'react-router-dom';
import Form from '@/components/form/form';
import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

function ResetPassword() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Form title={'Восстановление пароля'} textButton={'Сохранить'}>
          <PasswordInput name={'password'} placeholder={'Введите новый пароль'} />

          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
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

export default ResetPassword;
