import React from 'react';
import styles from './register.module.css';
import { Link } from 'react-router-dom';
import Form from '@/components/form/form';
import { useFormAndValidation } from '@/hooks/useForm';
import { useDispatch } from 'react-redux';
import { register } from '@/services/user/actions';
import { toast } from 'react-toastify';
import InputWithName from '@/components/form/inputs/input-with-name';
import InputWithMail from '@/components/form/inputs/input-with-mail';
import InputWithPassword from '@/components/form/inputs/input-with-password';
import { messages } from '@/utils/constants';

function Register() {
  const initialValid = {
    name: true,
    email: true,
    password: true,
  };

  const { handleInput, values, errors, inputsValid, isFormValid } = useFormAndValidation({
    initialValid,
  });
  const { name, email, password } = values;

  const dispatch = useDispatch();

  const handleRegister = (e, name, email, password) => {
    e.preventDefault();

    if (name && email && password) {
      dispatch(register({ name, email, password }))
        .unwrap()
        .then(() => toast.info(messages.SUCCESS_REGISTRATION))
        .catch((err) => {
          toast.error(err);
        });

      return;
    }

    toast.error(messages.ERROR_FORM_FIELDS);
    return;
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Form
          title={'Регистрация'}
          textButton={'Зарегистрироваться'}
          handle={(e) => handleRegister(e, name, email, password)}
          isFormValid={isFormValid}
        >
          <InputWithName
            handleInput={handleInput}
            value={values?.name}
            error={errors?.name}
            inputValid={inputsValid?.name}
          />
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
