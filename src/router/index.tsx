import {
  createBrowserRouter, createRoutesFromElements, Route,
} from 'react-router-dom';

import PageTemplate from '../templates/PageTemplate';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import UserActivationPage from '../pages/UserActivationPage';
import RegistrationConfirmationPage from '../pages/RegistrationConfimationPage';
import NewPasswordPage from '../pages/NewPasswordPage';
import PrivateRoute from './PrivateRoute';
import HomePage from '../pages/HomePage';
import TrendsPage from '../pages/TrendsPage';
import OneFilmPage from '../pages/OneFilmPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<PageTemplate />}
      path="/"
    >
      <Route element={<SignInPage />} path="signin" />
      <Route element={<SignUpPage />} path="signup" />
      <Route element={<ResetPasswordPage />} path="reset-password" />
      <Route element={<NewPasswordPage />} path="password/reset/confirm/:uid/:token" />

      <Route element={<RegistrationConfirmationPage />} path="confirmation" />
      <Route element={<UserActivationPage />} path="activate/:uid/:token" />
      <Route element={<PrivateRoute />}>
        <Route element={<HomePage />} path="all" />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<TrendsPage />} path="trends" />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<OneFilmPage />} path="film/:id" />
      </Route>
      {/* <Route element={<PrivateRoute Component={FilmsListPageTemplate} />} path="film/:id" /> */}
    </Route>,
  ),
);

export default router;
