import { ToggleButton } from '@mui/material';
import { useBattleToggleButton } from '../hooks/useBattleToggleButton';

type Props = {
  terastallize: boolean;
  handleTerastallized: () => void;
  isTerastallize: boolean;
};

export function TerastalButton({ terastallize, handleTerastallized, isTerastallize }: Props) {
  const { StyledToggleButtonGroup } = useBattleToggleButton();

  return (
    <StyledToggleButtonGroup size="small" onChange={handleTerastallized}>
      <ToggleButton
        value="terastal"
        aria-label="terastal"
        selected={terastallize}
        color="error"
        disabled={isTerastallize ? true : false}
        tabIndex={-1} //Tabキーでの選択を無効化
      >
        <img
          width="34"
          height="34"
          src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_01.png"
          alt=""
        />
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
}
