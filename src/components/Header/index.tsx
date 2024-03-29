import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { ChangeEventHandler, useState } from 'react';
import UserInfo from '../UserInfo';
import './Header.styles.css';
import Logo from '../Logo';
import useUserStore from '../../redux/selectors/useUser';
import Filters from '../Filters';

import { AppDispatch } from '../../redux';
import { openFilters } from '../../redux/slices/Filters';
import Burger from '../Burger';
import Navigation from '../Navigation';

function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const onBurgerClick = () => {
    setIsBurgerOpen((prevState) => !prevState);
  };
  const { isAuthorized } = useUserStore();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const onFilterButtonClick = () => {
    dispatch(openFilters());
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    navigate(value ? `search?text=${e.target.value}` : 'all');
  };

  return (
    <header className={clsx('header', isAuthorized && 'header--authorized')}>
      <Logo />
      {isAuthorized && (
        <>
          <div className="search__wrapper">
            <input className="search" placeholder="Search" type="search" onChange={onChange} />
            <div className="filtration">
              <button className="filter-button" type="button" onClick={onFilterButtonClick}>
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
                    d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM9 12C9 11.4477 9.44772 11 10 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H10C9.44772 13 9 12.5523 9 12ZM13 18C13 17.4477 13.4477 17 14 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H14C13.4477 19 13 18.5523 13 18Z"
                    fill="white"
                  />
                </svg>
              </button>
              <Filters />
            </div>

          </div>

          <UserInfo />
          <Burger isBurgerOpen={isBurgerOpen} onBurgerClick={onBurgerClick} />
          <Navigation isOpen={isBurgerOpen} />
        </>
      )}
    </header>
  );
}

export default Header;
