import React, { useMemo, useState } from 'react';
import initialIngredientsContext from '@/contexts/initialIngredientsContext';
import AppHeader from './app-header/app-header';
import AppContent from './app-content/app-content';
import getIngredients from '@/utils/api';
import ErrorBoundary from './error-boundary/error-boendary';

export default function App() {
  const [initialIngredients, setInitialIngredients] = useState([]);

  async function getData() {
    const { data } = await getIngredients();
    setInitialIngredients(data);
  }

  useMemo(() => {
    try {
      getData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <initialIngredientsContext.Provider value={initialIngredients}>
      <ErrorBoundary>
        <AppHeader />
        <AppContent />
      </ErrorBoundary>
    </initialIngredientsContext.Provider>
  );
}
