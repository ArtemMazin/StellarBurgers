/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { currentUser } from '@/services/user/selectors';
import { REG_EXP_PASSWORD, messages } from '@/utils/constants';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

function InputWithPassword({ handleInput, value, error, inputValid }) {
  const [disabled, setDisabled] = useState(true);
  const [currentIcon, setCurrentIcon] = useState('EditIcon');
  const user = useSelector(currentUser);

  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setDisabled(false);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  return (
    <Input
      ref={inputRef}
      name={'password'}
      type={'password'}
      placeholder={'Пароль'}
      icon={currentIcon}
      value={value || ''}
      error={!inputValid}
      errorText={error}
      disabled={user && disabled}
      required
      minLength={6}
      onChange={(e) => handleInput(e, REG_EXP_PASSWORD, messages.INPUT_PASSWORD)}
      onIconClick={onIconClick}
      onFocus={() => setCurrentIcon('CloseIcon')}
      onBlur={() => {
        setDisabled(true);
        setCurrentIcon('EditIcon');
      }}
    />
  );
}

export default InputWithPassword;
