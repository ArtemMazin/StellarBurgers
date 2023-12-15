import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import Form from '@/components/form/form';
import { useDispatch, useSelector } from 'react-redux';
import { useFormAndValidation } from '@/hooks/useForm';
import { login } from '@/services/user/actions';
import useStatus from '@/hooks/useStatus';
import Preloader from '@/components/preloader/preloader';
import { errorUser, statusUser } from '@/services/user/selectors';
import { toast } from 'react-toastify';

function Login() {
  const { handleChangeValidation, values } = useFormAndValidation();
  const { email, password } = values;

  const status = useSelector(statusUser);
  const error = useSelector(errorUser);

  const dispatch = useDispatch();

  const handleLogin = (e, email, password) => {
    e.preventDefault();

    if (email && password) {
      dispatch(login({ email, password }))
        .unwrap()
        .then(() => toast.info('Вход выполнен успешно'))
        .catch((err) => {
          toast.error(err);
        });
      return;
    }

    toast.error('Заполните все поля формы');
    return;
  };

  const content = useStatus(
    <div className="pt-20 pl-12">
      <Preloader />
    </div>,
    <Form title={'Вход'} textButton={'Войти'} handle={(e) => handleLogin(e, email, password)}>
      <EmailInput
        onChange={handleChangeValidation}
        value={email || ''}
        name={'email'}
        isIcon={false}
      />
      <PasswordInput onChange={handleChangeValidation} value={password || ''} name={'password'} />
    </Form>,
    status,
    error,
  );

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {content}
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
