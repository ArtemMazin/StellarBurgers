/* eslint-disable react/prop-types */
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
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
