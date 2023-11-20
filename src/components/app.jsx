import React, { useEffect, useState } from 'react';
import initialIngredientsContext from '@/contexts/initialIngredientsContext';
import AppHeader from './app-header/app-header';
import AppContent from './app-content/app-content';
import URL from '@/utils/constants';

function getResponseData(res) {
  if (!res.ok) {
    throw new Error('Ошибка');
  }
  return res.json();
}
async function request(url) {
  const res = await fetch(url);
  return getResponseData(res);
}

export function getIngredients() {
  return request(URL);
}

export default function App() {
  const [initialIngredients, setInitialIngredients] = useState([]);

  async function getData() {
    const { data } = await getIngredients();
    setInitialIngredients(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <initialIngredientsContext.Provider value={initialIngredients}>
      <AppHeader />
      <AppContent />
    </initialIngredientsContext.Provider>
  );
}
