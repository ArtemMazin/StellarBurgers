import { currentUser } from '@/services/user/selectors';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormAndValidation } from '@/hooks/useForm';
import InputWithName from '@/components/form/inputs/input-with-name';
import InputWithMail from '@/components/form/inputs/input-with-mail';
import InputWithPassword from '@/components/form/inputs/input-with-password';
import Form from '@/components/form/form';
import { toast } from 'react-toastify';
import { updateUser } from '@/services/user/actions';
import { messages } from '@/utils/constants';
import { useAppDispatch } from '@/redux-hooks';

function ProfileForm() {
  const [isVisibleButtons, setVisibleButtons] = useState(false);
  const user = useSelector(currentUser);

  const dispatch = useAppDispatch();

  const initialValues = {
    name: user !== null ? user.name : '',
    email: user !== null ? user.email : '',
    password: '',
  };
  const initialValid = {
    name: true,
    email: true,
    password: true,
  };

  const { handleInput, values, errors, inputsValid, isFormValid, resetForm } = useFormAndValidation(
    initialValues,
    initialValid,
  );

  useEffect(() => {
    if (user !== null) {
      if (
        values.name.trim() !== user.name ||
        values.email !== user.email ||
        user.password ||
        values.password
      ) {
        setVisibleButtons(true);
      }
    }
  }, [user, values.email, values.name, values.password]);

  const handleSubmit = (e: React.FormEvent<Element>) => {
    e.preventDefault();
    if (values.email && values.password && values.name) {
      dispatch(updateUser({ email: values.email, password: values.password, name: values.name }))
        .unwrap()
        .then(() => {
          toast.info(messages.SUCCESS_PROFILE_UPDATE);
        })
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

  const handleReset = () => {
    resetForm();
  };

  return (
    <Form
      title={''}
      textButton={'Сохранить'}
      textButtonReset={'Отмена'}
      isVisibleButtons={isVisibleButtons}
      isFormValid={isFormValid}
      handle={handleSubmit}
      handleReset={handleReset}
    >
      <InputWithName
        handleInput={handleInput}
        value={values?.name}
        error={errors?.name}
        inputValid={inputsValid?.name}
        isIcon={true}
      />
      <InputWithMail
        handleInput={handleInput}
        value={values?.email}
        error={errors?.email}
        inputValid={inputsValid?.email}
        isIcon={true}
      />
      <InputWithPassword
        handleInput={handleInput}
        value={values?.password}
        error={errors?.password}
        inputValid={inputsValid?.password}
        icon="EditIcon"
      />
    </Form>
  );
}

export default ProfileForm;
