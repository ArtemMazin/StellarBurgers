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
import { register } from '@/services/user/actions';
import { toast } from 'react-toastify';

function Register() {
  const { handleChangeValidation, values } = useFormAndValidation();
  const { name, email, password } = values;

  const dispatch = useDispatch();

  const handleRegister = (e, name, email, password) => {
    e.preventDefault();

    if (name && email && password) {
      dispatch(register({ name, email, password }))
        .unwrap()
        .then(() => toast.info('Регистрация прошла успешно'))
        .catch((err) => {
          toast.error(err);
        });

      return;
    }

    toast.error('Заполните все поля формы');
    return;
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
