import {
  Outlet, Navigate, useLocation,
} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './UnauthorizedPageTemplate.styles.css';

function UnauthorizedPageTemplate() {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return <Navigate to="signin" replace />;
  }

  return (
    <div className="unauth-page-template">
      <Header />
      <div className="unauth-page-template__content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default UnauthorizedPageTemplate;
