import { IconButton, Stack } from '@mui/material';
import { BracketFieldSolo } from './BracketFieldSolo';
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteIcon from '@mui/icons-material/Delete';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import { useRecoilValue } from 'recoil';
import { bracketResultAtom } from '../../store/atomBracket';

type Props = {
  onChangeName: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeScore: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  name: BracketRoundText;
  assign: MouseEventHandler<HTMLButtonElement>;
  reset: MouseEventHandler<HTMLButtonElement>;
};

export function BracketFieldUnit({ onChangeName, onChangeScore, name, reset, assign }: Props) {
  const bracketScore = useRecoilValue(bracketResultAtom);

  return (
    <Stack spacing={0.5}>
      <Stack direction="row">
        <BracketFieldSolo
          idName={`${name}-name1p`}
          valueName={bracketScore[name].name1p}
          onChangeName={onChangeName}
          idScore={`${name}-score1p`}
          valueScore={bracketScore[name].score1p}
          onChangeScore={onChangeScore}
        />
        <IconButton color="primary" onClick={assign} name={name}>
          <ReplyIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <BracketFieldSolo
          idName={`${name}-name2p`}
          valueName={bracketScore[name].name2p}
          onChangeName={onChangeName}
          idScore={`${name}-score2p`}
          valueScore={bracketScore[name].score2p}
          onChangeScore={onChangeScore}
        />
        <IconButton onClick={reset} name={name}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
