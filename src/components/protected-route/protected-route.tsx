import { currentUser } from '@/services/user/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface IProtected {
  onlyUnAuth?: boolean;
  component: JSX.Element;
}

const Protected = ({ onlyUnAuth = false, component }: IProtected) => {
  const user = useSelector(currentUser);
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
export const OnlyUnAuth = ({ component }: IProtected) => (
  <Protected onlyUnAuth={true} component={component} />
);
