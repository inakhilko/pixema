import './Navigation.styles.css';
import { Link } from 'react-router-dom';
import { navigationList } from '../../constants/navigationList';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        {navigationList.map(({ linkName, path, icon }) => (
          <li className="navigation__item" key={linkName}>
            {icon}
            <Link to={path} className="navigation__link">{linkName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
