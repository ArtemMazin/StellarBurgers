import { currentUser } from '@/services/user/selectors';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Form from '../form/form';
import {
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

function ProfileForm() {
  const [disabled, setDisabled] = useState(true);
  const user = useSelector(currentUser);

  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setDisabled(!disabled);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  return (
    <Form title={''} textButton={'Сохранить'} textButtonReset={'Отмена'}>
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
        value={user.name}
      />
      <EmailInput name={'email'} isIcon={true} value={user.email} />
      <PasswordInput name={'password'} placeholder={'Пароль'} icon={'EditIcon'} />
    </Form>
  );
}

export default ProfileForm;
