import './Navigation.styles.css';
import { Link } from 'react-router-dom';
import { navigationList } from '../../constants/navigationList';
import FilmsServiceApi from '../../api/films';

function Navigation() {
  const onClick = async () => {
    const res = await FilmsServiceApi.getFilms();
    console.log(res);
  };
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
      <button type="button" onClick={onClick}>films</button>
    </nav>
  );
}

export default Navigation;
