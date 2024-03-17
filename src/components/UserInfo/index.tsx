import './UserInfo.styles.css';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UserMenu } from '../../constants/userMenu';
import { AppDispatch } from '../../redux';
import { logout } from '../../redux/slices/User';
import useUserStore from '../../redux/selectors/useUser';
import { APP_STORAGE_KEYS } from '../../api';

function UserInfo() {
  const { userData } = useUserStore();

  const initials = userData.username?.split(' ').reduce((result, currentValue) => result + currentValue[0], '');

  const dispatch = useDispatch<AppDispatch>();
  const onArrowClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.classList.toggle('user-menu--clicked');
  };

  const onLogOut = useCallback(() => {
    dispatch(logout());
    localStorage.removeItem(APP_STORAGE_KEYS.TOKENS);
  }, [dispatch]);
  return (
    <div className="user-info">
      <p className="user-info__initials">{initials}</p>
      <p className="user-info__full-name">{userData.username}</p>
      <div role="presentation" className="user-menu" onClick={onArrowClick}>
        <button className="user-info__button" type="button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.23521 6.35943C9.66647 6.01442 10.2958 6.08434 10.6408 6.5156L15.1405 12.1403L10.6408 17.765C10.2958 18.1963 9.66647 18.2662 9.23521 17.9212C8.80394 17.5762 8.73402 16.9469 9.07903 16.5156L12.5793 12.1403L9.07903 7.76499C8.73402 7.33373 8.80394 6.70444 9.23521 6.35943Z"
              fill="white"
            />
          </svg>
        </button>
        <ul className="user-menu__list">
          <li className="user-menu__item" key={1}>
            <Link
              to="/signin"
              className="user-menu__link"
              replace
            >
              {UserMenu.EDIT_PROFILE}
            </Link>
          </li>
          <li className="user-menu__item" key={2}>
            <Link
              to="/signin"
              className="user-menu__link"
              replace
              onClick={onLogOut}
            >
              {UserMenu.LOG_OUT}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserInfo;
