import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './input.module.css';
import React from 'react';
import { useResize } from '@/hooks/useResize';
import { TInputProps } from '@/utils/types';
import { REG_EXP_PASSWORD, messages } from '@/utils/constants';

function InputWithToken({ handleInput, value, error, inputValid }: TInputProps) {
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
      onChange={(e) => handleInput(e, REG_EXP_PASSWORD, messages.ERROR_PASSWORD_RESTORE)}
    />
  );
}

export default InputWithToken;
