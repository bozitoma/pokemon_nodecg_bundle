import { Spacer } from './Spacer';
import { styled, Stack } from '@mui/material';

const Picker = styled('div')({
  color: '#424242',
  textAlign: 'center',
  fontSize: '1em',
  padding: '.2em',
});

const Selector = styled('select')({
  color: '#424242',
  backgroundColor: 'rgba(0,0,0,0)',
  border: 'none',
  textAlign: 'center',
  fontSize: '1em',
  cursor: 'pointer',
  padding: '.2em',
});

type Props = {
  itemName: string;
  values: number[];
  handleChange: () => void;
};

export const ItemPicker = ({ itemName, values, handleChange }: Props) => {
  return (
    <>
      <Stack>
        <Picker>
          <div className="time-picker">{itemName}</div>
          <Spacer size=".5em" axis="vertical" />
          <Selector
            id={itemName}
            name={itemName}
            onChange={handleChange}
            defaultValue={itemName === 'min' ? '20' : '0'}
          >
            {values.map((value, i) => (
              <option value={value} key={i}>
                {typeof value !== 'string' ? String(value).padStart(2, '0') : value}
              </option>
            ))}
          </Selector>
        </Picker>
      </Stack>
    </>
  );
};
