/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { logout } from '@/services/user/actions';
import styles from './profile-tabs.module.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { NavLink, useMatch } from 'react-router-dom';
import { messages } from '@/utils/constants';
import { useResize } from '@/hooks/useResize';

function ProfileTabs() {
  const dispatch = useDispatch();

  const { isMobile } = useResize();

  const profileMatch = useMatch('/profile');

  const handleLogout = () => {
    //@ts-ignore
    dispatch(logout())
      .unwrap()
      .then(() => toast.info(messages.SUCCESS_LOGOUT))
      .catch((err: unknown) => {
        if (err instanceof Error) {
          toast.error(err.message);
        }
      });
  };

  return (
    <>
      <ul
        className={`text ${styles.links} ${
          isMobile ? 'ml-10 text_type_main-default' : 'mb-20 text_type_main-medium'
        }`}
      >
        <li>
          <NavLink to="/profile" className={styles.link}>
            <span className={`${!profileMatch && 'text_color_inactive'}`}>Профиль</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/orders" className={styles.link}>
            {({ isActive }) => (
              <span className={`${!isActive && 'text_color_inactive'}`}>История заказов</span>
            )}
          </NavLink>
        </li>
        <li>
          <button className={styles.button} onClick={handleLogout}>
            <span
              className={`text text_color_inactive ${
                isMobile ? 'text_type_main-default' : 'text text_type_main-medium'
              }`}
            >
              Выход
            </span>
          </button>
        </li>
      </ul>
    </>
  );
}

export default ProfileTabs;
