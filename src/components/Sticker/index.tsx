import clsx from 'clsx';
import './Sticker.styles.css';
import { useLocation } from 'react-router-dom';

type StickerProps = {
  rating?: number,
  imdbRating?: number,
  runtime?: number
};
function Sticker({ rating, imdbRating, runtime }: StickerProps) {
  const { pathname } = useLocation();
  const checkRating = (ratingToCheck: number) => {
    if (pathname.includes('trends')) {
      return 'trending-rating';
    }
    if (ratingToCheck >= 7) {
      return 'high-rating';
    }
    if (ratingToCheck < 7 && ratingToCheck > 4) {
      return 'average-rating';
    }
    return 'low-rating';
  };
  return (
    <p className={clsx('sticker', rating && 'rating', rating && checkRating(rating))}>
      {pathname.includes('trends') && (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0513 2L10.6813 4.8C9.70235 6.80035 8.39031 8.61962 6.8013 10.18L6.6213 10.35C5.60076 11.3408 5.01766 12.6977 5.0013 14.12V14.3C4.97427 17.0851 6.63391 19.6101 9.2013 20.69L9.4613 20.8C11.1452 21.5152 13.0474 21.5152 14.7313 20.8H14.7913C17.3779 19.6762 19.0375 17.1099 19.0013 14.29V9.95C18.1393 11.9185 16.5739 13.4946 14.6113 14.37C14.6113 14.37 14.6113 14.37 14.5513 14.37C14.4913 14.37 13.7913 14.66 13.4913 14.37C13.2234 14.0989 13.1977 13.6712 13.4313 13.37L13.5013 13.32H13.5513C15.8471 11.575 16.3823 8.34172 14.7713 5.95C13.4713 3.97 12.0513 2 12.0513 2Z"
          fill="white"
        />
      </svg>
      )}
      {rating && rating.toFixed(1)}
      {runtime && `${runtime} min` }
      {imdbRating && (
      <>
        <svg
          width="32"
          height="12"
          viewBox="0 0 32 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H3.27851V11.8282H0V0ZM14.7185 0V11.8282H11.8589L11.8463 3.84205L10.7058 11.8282H8.65996L7.4672 4.014L7.45373 11.8282H4.59478V0H8.83638C8.9487 0.718378 9.07805 1.55864 9.22916 2.52018L9.69545 5.52349L10.4498 0H14.7185ZM19.3033 2.01651V9.81169C19.7704 9.81169 20.0585 9.72283 20.1656 9.54388C20.272 9.36554 20.3269 8.8815 20.3269 8.09206V3.48735C20.3269 2.95036 20.3086 2.60661 20.272 2.45612C20.2355 2.30395 20.1544 2.19302 20.026 2.12272C19.8989 2.05136 19.6581 2.01651 19.3033 2.01651ZM16.0257 0H18.4739C20.0542 0 21.124 0.0681703 21.6807 0.204359C22.2383 0.341309 22.6624 0.565603 22.9521 0.876022C23.2418 1.18888 23.4235 1.5349 23.4962 1.91836C23.5697 2.30091 23.6062 3.05094 23.6062 4.17088V8.31392C23.6062 9.37604 23.552 10.0851 23.4465 10.443C23.3402 10.8011 23.1552 11.0811 22.8898 11.2841C22.6254 11.4858 22.2992 11.627 21.9106 11.7084C21.5219 11.7883 20.9368 11.8282 20.1536 11.8282H16.0259V0H16.0257ZM28.8526 4.89702C28.8526 4.39731 28.8181 4.07182 28.7496 3.91798C28.6811 3.76505 28.5486 3.68821 28.3482 3.68821C28.153 3.68821 28.0264 3.75562 27.9687 3.88785C27.9106 4.02161 27.8819 4.35835 27.8819 4.89687V9.06303C27.8819 9.58253 27.9149 9.91456 27.9807 10.0602C28.0455 10.2067 28.1766 10.2781 28.3708 10.2781C28.5702 10.2781 28.7002 10.204 28.7608 10.053C28.8216 9.90178 28.8521 9.54069 28.8521 8.96732L28.8526 4.89702ZM27.8819 0V2.81554C28.1427 2.53038 28.4328 2.31734 28.752 2.1772C29.0735 2.03766 29.4218 1.96736 29.7969 1.96736C30.2283 1.96736 30.6029 2.03081 30.9213 2.15666C31.239 2.28417 31.4814 2.4616 31.648 2.68969C31.8143 2.91855 31.9151 3.14285 31.9494 3.36136C31.9823 3.58002 32 4.04641 32 4.76159V9.12481C32 9.83543 31.9494 10.3644 31.8465 10.7122C31.746 11.0605 31.5058 11.3624 31.131 11.6175C30.7553 11.8725 30.3098 12 29.7938 12C29.423 12 29.0774 11.9239 28.7562 11.7717C28.4345 11.619 28.1405 11.3907 27.8759 11.0876L27.6724 11.8282H24.7352V0H27.8819Z"
            fill="white"
          />
        </svg>
        {imdbRating.toFixed(1)}
      </>
      )}
    </p>
  );
}
Sticker.defaultProps = {
  rating: undefined,
  imdbRating: undefined,
  runtime: undefined,
};
export default Sticker;