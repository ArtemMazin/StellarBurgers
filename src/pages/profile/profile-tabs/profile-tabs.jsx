import React from 'react';
import { logout } from '@/services/user/actions';
import styles from './profile-tabs.module.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';
import { URL } from '@/utils/url-config';

function ProfileTabs() {
  const dispatch = useDispatch();

  const location = useLocation();

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
        <Link to="" className={styles.link}>
          <span className={`${location.pathname !== URL.PROFILE && 'text_color_inactive'}`}>
            Профиль
          </span>
        </Link>
      </li>
      <li>
        <Link to={URL.PROFILE_ORDERS} className={`${styles.link} text_color_inactive`}>
          <span className={`${location.pathname !== '/profile/orders' && 'text_color_inactive'}`}>
            История заказов
          </span>
        </Link>
      </li>
      <li>
        <button className={styles.button} onClick={handleLogout}>
          <span className="text text_type_main-medium text_color_inactive">Выход </span>
        </button>
      </li>
    </ul>
  );
}

export default ProfileTabs;
