import { currentUser } from '@/services/user/selectors';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Form from '../../../components/form/form';
import {
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useFormAndValidation } from '@/hooks/useForm';

function ProfileForm() {
  const [isVisibleButtons, setVisibleButtons] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const user = useSelector(currentUser);

  const { handleChangeValidation, values } = useFormAndValidation({
    name: user.name,
    email: user.email,
  });

  useEffect(() => {
    setVisibleButtons(values.name !== user.name || values.email !== user.email);
  }, [user.email, user.name, values.email, values.name]);

  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setDisabled(!disabled);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  return (
    <Form
      title={''}
      textButton={'Сохранить'}
      textButtonReset={'Отмена'}
      isVisibleButtons={isVisibleButtons}
    >
      <Input
        ref={inputRef}
        type={'text'}
        placeholder={'Имя'}
        name={'name'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        icon={'EditIcon'}
        disabled={disabled}
        onIconClick={onIconClick}
        value={values.name}
        onChange={handleChangeValidation}
      />
      <EmailInput
        name={'email'}
        isIcon={true}
        value={values.email}
        onChange={handleChangeValidation}
      />
      <PasswordInput
        name={'password'}
        placeholder={'Пароль'}
        icon={'EditIcon'}
        value={values.password || ''}
        onChange={handleChangeValidation}
      />
    </Form>
  );
}

export default ProfileForm;
