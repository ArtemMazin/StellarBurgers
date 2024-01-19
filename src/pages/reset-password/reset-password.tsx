import React from 'react';
import styles from './reset-password.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Form from '@/components/form/form';
import { toast } from 'react-toastify';
import { URL } from '@/utils/url-config';
import { restorePassword } from '@/utils/api';
import { useFormAndValidation } from '@/hooks/useForm';
import InputWithPassword from '@/components/form/inputs/input-with-password';
import InputWithToken from '@/components/form/inputs/input-with-token';
import { messages } from '@/utils/constants';

function ResetPassword() {
  const initialValues = {
    password: '',
    token: '',
  };

  const initialValid = {
    password: true,
    token: true,
  };

  const { handleInput, handleChangeValidation, values, errors, inputsValid, isFormValid } =
    useFormAndValidation(initialValues, initialValid);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<Element>) => {
    e.preventDefault();
    restorePassword(values.password, values.token)
      .then(() => {
        if (localStorage.getItem('restorePassword')) {
          toast.info(messages.SUCCESS_PASSWORD_RESTORE);
          localStorage.removeItem('restorePassword');
          navigate(URL.LOGIN);
        } else {
          navigate(URL.MAIN);
        }
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          toast.error(err.message);
        }
      });
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Form
          title={'Восстановление пароля'}
          textButton={'Сохранить'}
          isFormValid={isFormValid}
          handle={handleSubmit}
        >
          <InputWithPassword
            handleInput={handleInput}
            value={values?.password}
            error={errors?.password}
            inputValid={inputsValid?.password}
            placeholder="Введите новый пароль"
          />

          <InputWithToken
            handleInput={handleChangeValidation}
            value={values?.token}
            error={errors?.token}
            inputValid={inputsValid?.token}
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
