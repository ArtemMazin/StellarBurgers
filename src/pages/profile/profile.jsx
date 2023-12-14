import Form from '@/components/form/form';
import styles from './profile.module.css';
import React, { useState } from 'react';
import {
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { logout } from '@/services/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser, errorUser, statusUser } from '@/services/user/selectors';
import useStatus from '@/hooks/useStatus';

function Profile() {
  const [disabled, setDisabled] = useState(true);
  const user = useSelector(currentUser);
  const status = useSelector(statusUser);
  const error = useSelector(errorUser);

  const dispatch = useDispatch();

  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setDisabled(!disabled);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const content = useStatus(
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
    </Form>,
    status,
    error,
  );

  return (
    <main className="container">
      <div className={styles.main}>
        <div className={`${styles.nav} ml-5`}>
          <ul className={`${styles.links} mb-20 text text_type_main-medium`}>
            <li>
              <span className={styles.link}>Профиль</span>
            </li>
            <li>
              <span className={styles.link}>История заказов</span>
            </li>
            <li>
              <button className={styles.link} onClick={handleLogout}>
                Выход
              </button>
            </li>
          </ul>
          <span className={`${styles.text} text text_type_main-small text_color_inactive`}>
            В этом разделе вы можете <br />
            изменить свои персональные данные
          </span>
        </div>
        <div className={styles.container}>{content}</div>
      </div>
    </main>
  );
}

export default Profile;
