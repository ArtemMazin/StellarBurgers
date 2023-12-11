import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppHeader from './components/app-header/app-header';
import AppContent from './components/app-content/app-content';
import ErrorBoundary from './components/error-boundary/error-boendary';
import Login from './pages/login/login';
import Register from './pages/register/register';
import ForgotPassword from './pages/forgot-password/forgot-password';
import ResetPassword from './pages/reset-password/reset-password';
import Profile from './pages/profile/profile';
import { URL } from './utils/url-config';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path={URL.MAIN} element={<AppContent />} />
          <Route path={URL.LOGIN} element={<Login />} />
          <Route path={URL.REGISTER} element={<Register />} />
          <Route path={URL.FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path={URL.RESET_PASSWORD} element={<ResetPassword />} />
          <Route path={URL.PROFILE} element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
