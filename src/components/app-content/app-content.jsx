import React from 'react';
import styles from './app-content.module.css';
import Tabs from './burger-ingredients/tabs/tabs';

function AppContent() {
  return (
    <main className={styles.content}>
      <section className={styles.ingredients}>
        <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
        <Tabs />
        {/* <ul></ul> */}
      </section>
      {/* <section></section> */}
    </main>
  );
}

export default AppContent;
