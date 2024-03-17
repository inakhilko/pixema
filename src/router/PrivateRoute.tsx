import { Navigate, useNavigate } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useUserStore from '../redux/selectors/useUser';
import { AppDispatch } from '../redux';
import { APP_STORAGE_KEYS } from '../api';
import getUserData from '../redux/thunks/getUserData';
import { authorize, checkTokens } from '../redux/slices/User';

function PrivateRoute({ Component }: { Component: FC }) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(APP_STORAGE_KEYS.TOKENS)) {
      dispatch(getUserData());
      dispatch(authorize());
      dispatch(checkTokens());
      navigate('../all');
    }
  }, [dispatch]);
  return useUserStore().isAuthorized ? <Component /> : <Navigate to="/signin" />;
}

export default PrivateRoute;
