import React, { useState } from 'react';
import { currentUser } from '@/services/user/selectors';
import { REG_EXP_PASSWORD, messages } from '@/utils/constants';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function InputWithPassword({
  icon = 'ShowIcon',
  placeholder = 'Пароль',
  handleInput,
  value,
  error,
  inputValid,
}) {
  const [disabled, setDisabled] = useState(true);
  const [currentIcon, setCurrentIcon] = useState(icon);
  const [currentType, setCurrentType] = useState('password');
  const user = useSelector(currentUser);

  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setDisabled(false);
    setTimeout(() => inputRef.current.focus(), 0);
    changeIcon();
  };

  const changeIcon = () => {
    switch (currentIcon) {
      case 'EditIcon':
        setCurrentIcon('CloseIcon');
        break;
      case 'CloseIcon':
        setCurrentIcon('EditIcon');
        break;
      case 'ShowIcon':
        setCurrentIcon('HideIcon');
        setCurrentType('text');
        break;
      case 'HideIcon':
        setCurrentIcon('ShowIcon');
        setCurrentType('password');
        break;

      default:
        break;
    }
  };

  return (
    <Input
      ref={inputRef}
      name={'password'}
      type={currentType}
      placeholder={placeholder}
      icon={currentIcon}
      value={value || ''}
      error={!inputValid}
      errorText={error}
      disabled={user && disabled}
      required
      minLength={6}
      onChange={(e) => handleInput(e, REG_EXP_PASSWORD, messages.INPUT_PASSWORD)}
      onIconClick={onIconClick}
      onBlur={() => {
        setDisabled(true);
        changeIcon();
      }}
    />
  );
}

export default InputWithPassword;

InputWithPassword.propTypes = {
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  inputValid: PropTypes.bool.isRequired,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
};
