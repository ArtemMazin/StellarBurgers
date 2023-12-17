import React, { useState } from 'react';
import { currentUser } from '@/services/user/selectors';
import { REG_EXP_NAME, messages } from '@/utils/constants';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function InputWithName({ isIcon = false, handleInput, value, error, inputValid }) {
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
      type={'text'}
      placeholder={'Имя'}
      name={'name'}
      error={!inputValid}
      errorText={error}
      icon={isIcon && currentIcon}
      disabled={user && disabled}
      value={value || ''}
      required
      minLength={2}
      onChange={(e) => handleInput(e, REG_EXP_NAME, messages.INPUT_NAME)}
      onFocus={() => setCurrentIcon('CloseIcon')}
      onBlur={() => {
        setDisabled(true);
        setCurrentIcon('EditIcon');
      }}
      onIconClick={onIconClick}
    />
  );
}

export default InputWithName;

InputWithName.propTypes = {
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  inputValid: PropTypes.bool.isRequired,
  isIcon: PropTypes.bool,
};
