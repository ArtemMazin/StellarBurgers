import React from 'react';
import styles from './forgot-password.module.css';
import Form from '@/components/form/form';
import { Link, useNavigate } from 'react-router-dom';
import { resetPassword } from '@/utils/api';
import InputWithMail from '@/components/form/inputs/input-with-mail';
import { useFormAndValidation } from '@/hooks/useForm';
import { toast } from 'react-toastify';
import { URL } from '@/utils/url-config';

function ForgotPassword() {
  const initialValid = {
    email: true,
  };

  const { handleInput, values, errors, inputsValid, isFormValid } = useFormAndValidation({
    initialValid,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(values.email)
      .then((res) => {
        localStorage.setItem('restorePassword', 'Пароль сброшен');
        navigate(URL.RESET_PASSWORD);
        toast.info(res?.message);
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Form
          title={'Восстановление пароля'}
          textButton={'Восстановить'}
          handle={handleSubmit}
          isFormValid={isFormValid}
        >
          <InputWithMail
            handleInput={handleInput}
            value={values?.email}
            error={errors?.email}
            inputValid={inputsValid?.email}
            placeholder="Укажите e-mail"
            isIcon={false}
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
