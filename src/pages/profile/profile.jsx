import Form from '@/components/form/form';
import styles from './profile.module.css';
import React, { useState } from 'react';
import {
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { logout, setAuthChecked, setUser } from '@/services/user/user-slice';
import { useDispatch } from 'react-redux';

function Profile() {
  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();

  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setDisabled(!disabled);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        dispatch(setUser(null));
      })
      .catch((err) => console.error(err))
      .finally(() => dispatch(setAuthChecked(true)));
  };

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
        <div className={styles.container}>
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
            />
            <EmailInput name={'email'} isIcon={true} />
            <PasswordInput name={'password'} placeholder={'Пароль'} icon={'EditIcon'} />
          </Form>
        </div>
      </div>
    </main>
  );
}

export default Profile;
