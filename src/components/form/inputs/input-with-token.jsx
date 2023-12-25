import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './input.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import { useResize } from '@/hooks/useResize';

function InputWithToken({ handleInput, value, error, inputValid }) {
  const { isMobile } = useResize();

  return (
    <Input
      type={'text'}
      size={isMobile ? 'small' : 'default'}
      extraClass={styles.input}
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
