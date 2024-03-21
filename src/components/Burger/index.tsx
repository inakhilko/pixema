import './Burger.styles.css';

function Burger({ isBurgerOpen, onBurgerClick }:
{ isBurgerOpen: boolean, onBurgerClick: ()=> void }) {
  return (
    <button className="burger" type="button" onClick={onBurgerClick}>
      {!isBurgerOpen ? (
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
            d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
            fill="white"
          />
        </svg>
      ) : (
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
            d="M17.6569 16.2426L13.4142 12L17.6569 7.75735C18.0472 7.36702 18.0472 6.73346 17.6569 6.34313C17.2665 5.95281 16.633 5.95281 16.2426 6.34313L12 10.5858L7.75736 6.34313C7.36704 5.95281 6.73347 5.95281 6.34315 6.34313C5.95282 6.73346 5.95282 7.36702 6.34315 7.75735L10.5858 12L6.34315 16.2426C5.95212 16.6337 5.95282 17.2665 6.34315 17.6568C6.73347 18.0472 7.36633 18.0479 7.75736 17.6568L12 13.4142L16.2426 17.6568C16.6337 18.0479 17.2665 18.0472 17.6569 17.6568C18.0472 17.2665 18.0479 16.6337 17.6569 16.2426Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
}

export default Burger;
