import './Footer.styles.css';
import clsx from 'clsx';
import useUserStore from '../../redux/selectors/useUser';

function Footer() {
  const { isAuthorized } = useUserStore();

  return (
    <footer className={clsx('footer', isAuthorized && 'footer--authorized')}>
      <div className="container">
        © All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
