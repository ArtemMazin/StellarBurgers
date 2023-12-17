import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import React from 'react';

function InputWithToken({ handleInput, value, error, inputValid }) {
  return (
    <Input
      type={'text'}
      placeholder={'Введите код из письма'}
      name={'token'}
      error={!inputValid}
      errorText={error}
      value={value || ''}
      required
      onChange={handleInput}
    />
  );
}

export default InputWithToken;

InputWithToken.propTypes = {
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  inputValid: PropTypes.bool.isRequired,
};
