import React from 'react';
import styles from './register.module.css';
import {
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import Form from '@/components/form/form';

function Register() {
  const [value, setValue] = React.useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Form title={'Регистрация'} textButton={'Зарегистрироваться'}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
          <EmailInput onChange={onChange} value={value} name={'email'} isIcon={false} />
          <PasswordInput onChange={onChange} value={value} name={'password'} />
        </Form>

        <div>
          <p className="text text_type_main-default text_color_inactive mb-4">
            Уже зарегистрированы?{' '}
            <Link to="/login" className={styles.link}>
              Войти
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Register;
