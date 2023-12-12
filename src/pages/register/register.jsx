import React from 'react';
import styles from './register.module.css';
import {
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import Form from '@/components/form/form';
import { useFormAndValidation } from '@/hooks/useForm';
import { useDispatch } from 'react-redux';
import { registerThunk } from '@/services/user/user-slice';

function Register() {
  const {
    isFormValid,
    errors,
    handleChangeValidation,
    inputsValid,
    setInputsValid,
    values,
    handleInput,
  } = useFormAndValidation();
  const { name, email, password } = values;

  const dispatch = useDispatch();

  const handleRegister = (e, name, email, password) => {
    e.preventDefault();

    dispatch(registerThunk({ name, email, password }))
      .unwrap()
      .catch((error) => console.error(error));
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Form
          title={'Регистрация'}
          textButton={'Зарегистрироваться'}
          handle={(e) => handleRegister(e, name, email, password)}
        >
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={handleChangeValidation}
            value={name || ''}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
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
