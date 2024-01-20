import { useAppSelector } from '@/redux-hooks';
import { currentUser } from '@/services/user/selectors';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type TProtectedProps = {
  onlyUnAuth?: boolean;
  component: JSX.Element;
};

const Protected = ({ onlyUnAuth = false, component }: TProtectedProps) => {
  const user = useAppSelector(currentUser);
  const location = useLocation();

  if (onlyUnAuth && user) {
    // Пользователь авторизован, но роут предназначен для неавторизованного пользователя
    // Делаем редирект на главную страницу или на тот адрес, что записан в location.state.from
    const { from } = location.state || { from: { pathname: '/' } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }: TProtectedProps) => (
  <Protected onlyUnAuth={true} component={component} />
);
