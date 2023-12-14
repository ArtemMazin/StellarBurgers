import React from 'react';
import styles from './profile.module.css';
import { useSelector } from 'react-redux';
import { errorUser, statusUser } from '@/services/user/selectors';
import useStatus from '@/hooks/useStatus';
import Preloader from '@/components/preloader/preloader';
import ProfileTabs from '@/components/profile-tabs/profile-tabs';
import ProfileForm from '@/components/profile-form/profile-form';

function Profile() {
  const status = useSelector(statusUser);
  const error = useSelector(errorUser);

  const content = useStatus(
    <div className="pt-20 pl-30 ml-25">
      <Preloader />
    </div>,
    <ProfileForm />,
    status,
    error,
  );

  return (
    <main className="container">
      <div className={styles.main}>
        <div className={`${styles.nav} ml-5`}>
          <ProfileTabs />
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
