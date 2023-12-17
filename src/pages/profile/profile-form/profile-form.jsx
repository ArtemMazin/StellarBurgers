import { currentUser } from '@/services/user/selectors';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormAndValidation } from '@/hooks/useForm';
import InputWithName from '@/components/form/inputs/input-with-name';
import InputWithMail from '@/components/form/inputs/input-with-mail';
import InputWithPassword from '@/components/form/inputs/input-with-password';
import Form from '@/components/form/form';

function ProfileForm() {
  const [isVisibleButtons, setVisibleButtons] = useState(false);
  const user = useSelector(currentUser);

  const initialValues = {
    name: user.name,
    email: user.email,
  };
  const initialValid = {
    name: true,
    email: true,
    password: true,
  };

  const { handleInput, values, errors, inputsValid, isFormValid } = useFormAndValidation({
    initialValues,
    initialValid,
  });

  useEffect(() => {
    setVisibleButtons(values.name.trim() !== user.name || values.email !== user.email);
  }, [user.email, user.name, values.email, values.name]);

  return (
    <Form
      title={''}
      textButton={'Сохранить'}
      textButtonReset={'Отмена'}
      isVisibleButtons={isVisibleButtons}
      isFormValid={isFormValid}
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
