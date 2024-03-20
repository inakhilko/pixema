import { ReactNode } from 'react';
import Button from '../Button';
import './ButtonBlock.styles.css';
import { AppDispatch } from '../../redux';

type ButtonBlockDataType = {
  content: ReactNode,
  onClick: (dispatch?: AppDispatch) => void
};
type ButtonBlockPropsType = {
  buttonBlockData: ButtonBlockDataType[],
  dispatch?: AppDispatch
};
function ButtonBlock({ buttonBlockData, dispatch }:ButtonBlockPropsType) {
  return (
    <div className="button-block">
      {buttonBlockData.map(({ content, onClick }) => (

        <Button onClick={() => onClick()} additionalClass="pair-button">{content}</Button>
      ))}
    </div>
  );
}

export default ButtonBlock;
