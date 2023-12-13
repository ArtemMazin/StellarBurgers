import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppHeader from './components/app-header/app-header';
import ErrorBoundary from './components/error-boundary/error-boendary';
import Login from './pages/login/login';
import Register from './pages/register/register';
import ForgotPassword from './pages/forgot-password/forgot-password';
import ResetPassword from './pages/reset-password/reset-password';
import Profile from './pages/profile/profile';
import { URL } from './utils/url-config';
import Home from './pages/home/home';
import NotFound from './pages/not-found-404/not-found';
import { OnlyAuth, OnlyUnAuth } from './components/protected-route/protected-route';
import { useDispatch } from 'react-redux';
import { getUser, setAuthChecked, setUser } from './services/user/user-slice';

export default function App() {
  const dispatch = useDispatch();

  useMemo(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(getUser())
        .unwrap()
        .then((res) => {
          dispatch(setUser(res.user));
        })
        .catch(() => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          dispatch(setUser(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
    }
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <AppHeader />
      <Routes>
        <Route path={URL.MAIN} element={<Home />} />
        <Route path={URL.LOGIN} element={<OnlyUnAuth component={<Login />} />} />
        <Route path={URL.REGISTER} element={<OnlyUnAuth component={<Register />} />} />
        <Route path={URL.FORGOT_PASSWORD} element={<OnlyUnAuth component={<ForgotPassword />} />} />
        <Route path={URL.RESET_PASSWORD} element={<OnlyUnAuth component={<ResetPassword />} />} />
        <Route path={URL.PROFILE} element={<OnlyAuth component={<Profile />} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}
