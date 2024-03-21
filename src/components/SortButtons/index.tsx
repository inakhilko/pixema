import ButtonBlock from '../ButtonBlock';
import './SortButtons.styles.css';
import { IButtonBlock } from '../../constants/buttonsData.tsx';

type SortButtonsPropsType = {
  title: string,
  name: string,
  buttonsInfo: IButtonBlock[]
};
function SortButtons({ title, buttonsInfo, name }: SortButtonsPropsType) {
  return (
    <div className="sort__wrapper">
      <h4 className="sort__title">{title}</h4>
      <ButtonBlock buttonBlockData={buttonsInfo} name={name} />
    </div>
  );
}

export default SortButtons;
