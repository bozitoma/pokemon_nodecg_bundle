import { styled } from '@mui/material';
import { ItemPicker } from './ItemPicker';
import { Spacer } from './Spacer';
import { ChangeEventHandler } from 'react';

const Pickers = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

type Props = {
  handleChange: ChangeEventHandler<HTMLSelectElement>;
};

const times: { min: number[]; sec: number[] } = {
  min: [...Array(60)].map((_u, i) => i),
  sec: [...Array(60)].map((_u, i) => i),
} as const;

export const ItemPickers = ({ handleChange }: Props) => {
  return (
    <>
      <Pickers>
        {Object.entries(times).map(([name, time], i) => (
          <div key={i}>
            <Spacer size=".2em" axis="horizontal" />
            <ItemPicker itemName={name} values={time} handleChange={handleChange} key={i} />
            <Spacer size=".5em" axis="horizontal" />
          </div>
        ))}
      </Pickers>
    </>
  );
};
