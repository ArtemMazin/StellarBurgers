import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import Form from '@/components/form/form';

function Login() {
  const [value, setValue] = React.useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Form title={'Вход'} textButton={'Войти'}>
          <EmailInput onChange={onChange} value={value} name={'email'} isIcon={false} />
          <PasswordInput onChange={onChange} value={value} name={'password'} />
        </Form>

        <div>
          <p className="text text_type_main-default text_color_inactive mb-4">
            Вы — новый пользователь?{' '}
            <Link to="/register" className={styles.link}>
              Зарегистрироваться
            </Link>
          </p>
          <p className="text text_type_main-default text_color_inactive">
            Забыли пароль?{' '}
            <Link to="/forgot-password" className={styles.link}>
              Восстановить пароль
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
