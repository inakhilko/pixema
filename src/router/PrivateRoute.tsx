import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useUserStore from '../redux/selectors/useUser';
import { AppDispatch } from '../redux';
import getUserData from '../redux/thunks/getUserData';

function PrivateRoute() {
  const dispatch = useDispatch<AppDispatch>();
  const userStore = useUserStore();
  useEffect(() => {
    if (userStore.isAuthorized) {
      dispatch(getUserData());
    }
  }, [dispatch]);
  return useUserStore().isAuthorized ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoute;
