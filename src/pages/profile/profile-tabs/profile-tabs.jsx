import React from 'react';
import { logout } from '@/services/user/actions';
import styles from './profile-tabs.module.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function ProfileTabs() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => toast.info('Вы вышли из аккаунта'))
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <ul className={`${styles.links} mb-20 text text_type_main-medium`}>
      <li>
        <span className={styles.link}>Профиль</span>
      </li>
      <li>
        <span className={styles.link}>История заказов</span>
      </li>
      <li>
        <button className={`${styles.button} text text_type_main-medium`} onClick={handleLogout}>
          Выход
        </button>
      </li>
    </ul>
  );
}

export default ProfileTabs;
