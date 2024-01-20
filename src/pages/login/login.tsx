import React from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import Form from '@/components/form/form';
import { useFormAndValidation } from '@/hooks/useForm';
import { login } from '@/services/user/actions';
import useStatus from '@/hooks/useStatus';
import Preloader from '@/components/preloader/preloader';
import { statusUser } from '@/services/user/selectors';
import { toast } from 'react-toastify';
import InputWithMail from '@/components/form/inputs/input-with-mail';
import InputWithPassword from '@/components/form/inputs/input-with-password';
import { messages } from '@/utils/constants';
import { useAppDispatch, useAppSelector } from '@/redux-hooks';

function Login() {
  const initialValues = {
    email: '',
    password: '',
  };
  const initialValid = {
    email: true,
    password: true,
  };
  const { handleInput, values, errors, inputsValid, isFormValid } = useFormAndValidation(
    initialValues,
    initialValid,
  );
  const { email, password } = values;

  const status = useAppSelector(statusUser);

  const dispatch = useAppDispatch();

  const handleLogin = (e: React.FormEvent<Element>, email: string, password: string) => {
    e.preventDefault();

    if (email && password) {
      dispatch(login({ email, password }))
        .unwrap()
        .then(() => toast.info(messages.SUCCESS_LOGIN))
        .catch((err: unknown) => {
          if (err instanceof Error) {
            toast.error(err.message);
          }
        });
      return;
    }

    toast.error(messages.ERROR_FORM_FIELDS);
    return;
  };

  const content = useStatus({
    loading: (
      <div className="pt-20 pl-12">
        <Preloader />
      </div>
    ),
    content: (
      <Form
        title={'Вход'}
        textButton={'Войти'}
        handle={(e) => handleLogin(e, email, password)}
        isFormValid={isFormValid}
      >
        <InputWithMail
          handleInput={handleInput}
          value={values?.email}
          error={errors?.email}
          inputValid={inputsValid?.email}
        />
        <InputWithPassword
          handleInput={handleInput}
          value={values?.password}
          error={errors?.password}
          inputValid={inputsValid?.password}
        />
      </Form>
    ),
    status,
  });

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
