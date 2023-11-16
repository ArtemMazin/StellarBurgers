import React from 'react';
import styles from './app.module.css';
import AppHeader from './app-header/app-header';
import AppContent from './app-content/app-content';

export default function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <AppContent />
    </div>
  );
}
