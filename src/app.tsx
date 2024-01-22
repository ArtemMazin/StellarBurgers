import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/error-boundary';
import Login from './pages/login/login';
import Register from './pages/register/register';
import ForgotPassword from './pages/forgot-password/forgot-password';
import ResetPassword from './pages/reset-password/reset-password';
import Profile from './pages/profile/profile';
import { URL } from './utils/url-config';
import Home from './pages/home/home';
import NotFound from './pages/not-found-404/not-found';
import { OnlyAuth, OnlyUnAuth } from './components/protected-route/protected-route';
import { getUser } from './services/user/actions';
import Modal from './components/modal/modal';
import IngredientDetails from './components/modal/ingredient-details/ingredient-details';
import Ingredient from './pages/ingredient/ingredient';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import ProfileForm from './pages/profile/profile-form/profile-form';
import Layout from './components/layout/layout';
import { messages } from './utils/constants';
import { useResize } from './hooks/useResize';
import { useAppDispatch } from './redux-hooks';
import OrderFeed from './pages/order-feed/order-feed';
import Orders from './pages/profile/orders/orders';

export default function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const { isMobile } = useResize();

  const handleModalClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(getUser())
        .unwrap()
        .then(() => toast.info(messages.SUCCESS_LOGIN))
        .catch((err: unknown) => {
          if (err instanceof Error) {
            toast.error(err.message);
          }
        });
    }
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <Routes location={background || location}>
        <Route path={URL.MAIN} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={URL.FEED} element={<OrderFeed />} />
          <Route path={URL.LOGIN} element={<OnlyUnAuth component={<Login />} />} />
          <Route path={URL.REGISTER} element={<OnlyUnAuth component={<Register />} />} />
          <Route
            path={URL.FORGOT_PASSWORD}
            element={<OnlyUnAuth component={<ForgotPassword />} />}
          />
          <Route path={URL.RESET_PASSWORD} element={<OnlyUnAuth component={<ResetPassword />} />} />
          <Route path={URL.INGREDIENT} element={<Ingredient />} />
          <Route path={`${URL.PROFILE}/*`} element={<OnlyAuth component={<Profile />} />}>
            <Route index element={<ProfileForm />} />
            <Route path={URL.PROFILE_ORDERS} element={<Orders />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route
            path={URL.INGREDIENT}
            element={
              <Modal
                isOpen={background}
                onClose={handleModalClose}
                title={`${isMobile ? '' : 'Детали ингредиента'}`}
              >
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </ErrorBoundary>
  );
}
