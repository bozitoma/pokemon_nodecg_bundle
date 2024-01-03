import { styled } from '@mui/material';
import { ItemPicker } from './ItemPicker';
import { Spacer } from './Spacer';
import { ChangeEventHandler } from 'react';

const Pickers = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

type TIMES = {
  [key: string]: number[];
};

type Props = {
  items: TIMES;
  handleChange: ChangeEventHandler<HTMLSelectElement>;
};

export const ItemPickers = ({ items, handleChange }: Props) => {
  // プロパティ名を値に持つ配列に変換
  const itemNames = Object.keys(items);

  return (
    <>
      <Pickers>
        {itemNames.map((itemName, i) => (
          <div key={i}>
            <Spacer size=".2em" axis="horizontal" />
            <ItemPicker
              itemName={itemName}
              values={items[itemName]}
              handleChange={handleChange}
              key={i}
            />
            <Spacer size=".5em" axis="horizontal" />
          </div>
        ))}
      </Pickers>
    </>
  );
};
