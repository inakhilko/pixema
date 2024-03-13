import UserInfo from '../UserInfo';
import './Header.styles.css';
import Logo from '../Logo';

function Header() {
  return (
    <header className="header">
      <Logo />
      {localStorage.getItem('pixemaTokens') && (
        <>
          <input className="search" placeholder="Search" />
          <UserInfo name="Ina" surname="Kh" />
        </>
      )}
    </header>
  );
}

export default Header;
