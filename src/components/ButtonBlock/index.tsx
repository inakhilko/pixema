import { ReactNode } from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import Button from '../Button';
import './ButtonBlock.styles.css';

export type ButtonBlockDataType = {
  content: ReactNode;
  value: number;
  id: number
};
type ButtonBlockPropsType = {
  buttonBlockData: ButtonBlockDataType[];
  name: string;
};
function ButtonBlock({ buttonBlockData, name }: ButtonBlockPropsType) {
  const { setValue, watch } = useFormContext();
  const selectedValue = watch(name);
  return (
    <div className="button-block">
      {buttonBlockData.map(({ content, value, id }) => (
        <Button
          key={id}
          onClick={() => {
            setValue(name, value);
          }}
          additionalClass={
            clsx('pair-button', (selectedValue !== value) && 'button--disabled')
          }
        >
          {content}
        </Button>
      ))}
    </div>
  );
}

export default ButtonBlock;
