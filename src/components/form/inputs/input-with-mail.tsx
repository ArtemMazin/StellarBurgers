import React, { useState } from 'react';
import { currentUser } from '@/services/user/selectors';
import { REG_EXP_EMAIL, messages } from '@/utils/constants';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './input.module.css';
import { useSelector } from 'react-redux';
import { useResize } from '@/hooks/useResize';
import { TICons } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';
import { TInputProps } from '@/utils/types';

function InputWithMail({
  isIcon = false,
  handleInput,
  value,
  error,
  inputValid,
  placeholder = 'Логин',
}: TInputProps) {
  const [disabled, setDisabled] = useState(true);
  const [currentIcon, setCurrentIcon] = useState<keyof TICons>('EditIcon');
  const user = useSelector(currentUser);

  const { isMobile } = useResize();

  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const onIconClick = () => {
    setDisabled(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <Input
      ref={inputRef}
      name={'email'}
      type={'email'}
      size={isMobile ? 'small' : 'default'}
      extraClass={styles.input}
      placeholder={placeholder}
      {...(isIcon && { icon: currentIcon })}
      value={value || ''}
      error={!inputValid}
      errorText={error}
      {...(user && { disabled })}
      required
      onChange={(e) => handleInput(e, REG_EXP_EMAIL, messages.ERROR_INPUT_EMAIL)}
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
