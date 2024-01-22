import React from 'react';
import styles from './profile.module.css';
import { statusUser } from '@/services/user/selectors';
import useStatus from '@/hooks/useStatus';
import Preloader from '@/components/preloader/preloader';
import ProfileTabs from '@/components/profile-tabs/profile-tabs';
import { Outlet } from 'react-router-dom';
import { useResize } from '@/hooks/useResize';
import { useAppSelector } from '@/redux-hooks';

function Profile() {
  const status = useAppSelector(statusUser);

  const { isMobile } = useResize();

  const content = useStatus({
    loading: (
      <div className={`${isMobile ? 'pt-20 ml-8' : 'pt-20 pl-30 ml-25'}`}>
        <Preloader />
      </div>
    ),
    content: <Outlet />,
    status,
  });

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
        <>{content}</>
      </div>
    </main>
  );
}

export default Profile;
