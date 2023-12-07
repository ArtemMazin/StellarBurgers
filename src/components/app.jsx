import React from 'react';
import AppHeader from './app-header/app-header';
import AppContent from './app-content/app-content';
import ErrorBoundary from './error-boundary/error-boendary';

export default function App() {
  return (
    <ErrorBoundary>
      <AppHeader />
      <AppContent />
    </ErrorBoundary>
  );
}
