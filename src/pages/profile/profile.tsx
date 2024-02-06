import React from 'react';
import styles from './profile.module.css';
import ProfileTabs from '@/components/profile-tabs/profile-tabs';
import { Outlet } from 'react-router-dom';
import { useResize } from '@/hooks/useResize';

function Profile() {

  const { isMobile } = useResize();

  return (
    <main className="container">
      <div className={styles.main}>
        {isMobile ? (
          <h1 className="pl-2 pr-2 pt-4 pb-6 text text_type_main-medium">Профиль</h1>
        ) : (
          <div className={`${styles.nav} ml-5 mt-30`}>
            <ProfileTabs />
            <span className={`${styles.text} text text_type_main-small text_color_inactive`}>
              В этом разделе вы можете <br />
              изменить свои персональные данные
            </span>
          </div>
        )}
        <Outlet/>
      </div>
    </main>
  );
}

export default Profile;
