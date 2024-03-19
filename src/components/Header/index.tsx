import clsx from 'clsx';
import UserInfo from '../UserInfo';
import './Header.styles.css';
import Logo from '../Logo';
import useUserStore from '../../redux/selectors/useUser';

function Header() {
  const { isAuthorized } = useUserStore();
  return (
    <header className={clsx('header', isAuthorized && 'header--authorized')}>
      <Logo />
      {isAuthorized && (
        <>
          <input className="search" placeholder="Search" />
          <UserInfo />
        </>
      )}
    </header>
  );
}

export default Header;
