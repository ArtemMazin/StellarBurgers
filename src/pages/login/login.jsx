import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import Form from '@/components/form/form';
import { useDispatch } from 'react-redux';
import { useFormAndValidation } from '@/hooks/useForm';
import { loginThunk, setUser } from '@/services/user/user-slice';

function Login() {
  const {
    isFormValid,
    errors,
    handleChangeValidation,
    inputsValid,
    setInputsValid,
    values,
    handleInput,
  } = useFormAndValidation();
  const { email, password } = values;

  const dispatch = useDispatch();

  const handleLogin = (e, email, password) => {
    e.preventDefault();

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then((res) => {
        dispatch(setUser(res.user));
        localStorage.setItem('refreshToken', res.refreshToken);
        localStorage.setItem('accessToken', res.accessToken);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Form title={'Вход'} textButton={'Войти'} handle={(e) => handleLogin(e, email, password)}>
          <EmailInput
            onChange={handleChangeValidation}
            value={email || ''}
            name={'email'}
            isIcon={false}
          />
          <PasswordInput
            onChange={handleChangeValidation}
            value={password || ''}
            name={'password'}
          />
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
