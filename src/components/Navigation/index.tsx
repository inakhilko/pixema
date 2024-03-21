import './Navigation.styles.css';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { navigationList } from '../../constants/navigationList';

function Navigation({ isOpen }: { isOpen: boolean }) {
  return (
    <nav className={clsx('navigation', isOpen && 'navigation--opened')}>
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
