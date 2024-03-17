import {
  Outlet, Navigate, useLocation,
} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './PageTemplate.styles.css';
import useUserStore from '../../redux/selectors/useUser';

function PageTemplate() {
  const { isAuthorized } = useUserStore();

  const { pathname } = useLocation();

  if (pathname === '/') {
    if (isAuthorized) {
      return <Navigate to="all" replace />;
    }
    return <Navigate to="signin" replace />;
  }

  return (
    <div className={`page-template ${isAuthorized ? 'page-template--authorized' : 'page-template--unauthorized'}`}>
      <Header />
      <div className="page-template__content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default PageTemplate;
