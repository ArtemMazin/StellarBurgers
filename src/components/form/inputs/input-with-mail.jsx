import React, { useState } from 'react';
import { currentUser } from '@/services/user/selectors';
import { REG_EXP_EMAIL, messages } from '@/utils/constants';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function InputWithMail({
  isIcon = false,
  handleInput,
  value,
  error,
  inputValid,
  placeholder = 'Логин',
}) {
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
      name={'email'}
      type={'email'}
      placeholder={placeholder}
      icon={isIcon && currentIcon}
      value={value || ''}
      error={!inputValid}
      errorText={error}
      disabled={user && disabled}
      required
      onChange={(e) => handleInput(e, REG_EXP_EMAIL, messages.INPUT_EMAIL)}
      onIconClick={onIconClick}
      onFocus={() => setCurrentIcon('CloseIcon')}
      onBlur={() => {
        setDisabled(true);
        setCurrentIcon('EditIcon');
      }}
    />
  );
}

export default InputWithMail;

InputWithMail.propTypes = {
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  inputValid: PropTypes.bool.isRequired,
  isIcon: PropTypes.bool,
  placeholder: PropTypes.string,
};
