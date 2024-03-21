import ButtonBlock, { ButtonBlockDataType } from '../ButtonBlock';
import './SortButtons.styles.css';

type SortButtonsPropsType = {
  title: string,
  name:string,
  buttonsInfo: ButtonBlockDataType[]
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
