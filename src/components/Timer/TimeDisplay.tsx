import { styled } from '@mui/material';

type Props = { min: number; sec: number };

const StyledTimeDisplay = styled('div')({
  color: '#333',
  fontWeight: 'bold',
  fontSize: '7em',
});

// 値をゼロ埋めする関数
const zeroPaddingNum = (num: number) => String(num).padStart(2, '0');

export const TimeDisplay = (props: Props) => {
  return (
    <StyledTimeDisplay>
      <span>{zeroPaddingNum(props.min)}</span>:<span>{zeroPaddingNum(props.sec)}</span>
    </StyledTimeDisplay>
  );
};
