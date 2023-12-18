import React from 'react';
import { logout } from '@/services/user/actions';
import styles from './profile-tabs.module.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { URL } from '@/utils/url-config';
import { messages } from '@/utils/constants';

function ProfileTabs() {
  const dispatch = useDispatch();

  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => toast.info(messages.SUCCESS_LOGOUT))
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <ul className={`${styles.links} mb-20 text text_type_main-medium`}>
      <li>
        <Link to={URL.PROFILE} className={styles.link}>
          <span className={`${location.pathname !== URL.PROFILE && 'text_color_inactive'}`}>
            Профиль
          </span>
        </Link>
      </li>
      <li>
        <NavLink to={URL.PROFILE_ORDERS} className={styles.link}>
          {({ isActive }) => (
            <span className={`${!isActive && 'text_color_inactive'}`}>История заказов</span>
          )}
        </NavLink>
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
