import UserInfo from '../UserInfo';
import './Header.styles.css';
import Logo from '../Logo';
import useUserStore from '../../redux/selectors/useUser';

function Header() {
  const { isAuthorized } = useUserStore();
  return (
    <header className="header">
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
