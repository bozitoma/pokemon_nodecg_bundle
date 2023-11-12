import './app.css';
import { ToggleButton } from '@mui/material';
import { useBattleToggleButton } from '../hooks/useBattleToggleButton';

type Props = {
  alignment: string;
  handleAlignment: (_event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => void;
};

export function BattleToggleButton({ alignment, handleAlignment }: Props) {
  const { StyledToggleButtonGroup, ButtonIcon } = useBattleToggleButton();

  return (
    <>
      <StyledToggleButtonGroup
        className="toggleBotton"
        size="small"
        value={alignment}
        exclusive
        onChange={handleAlignment}
      >
        <ToggleButton
          value="Benched"
          aria-label="ベンチ"
          tabIndex={-1} //Tabキーでの選択を無効化
        >
          <img className="benched" width="34" height="34" src={ButtonIcon} alt="" />
        </ToggleButton>
        <ToggleButton
          value="Active"
          aria-label="バトル"
          tabIndex={-1} //Tabキーでの選択を無効化
        >
          <img width="34" height="34" src={ButtonIcon} alt="" />
        </ToggleButton>
        <ToggleButton
          value="Fainting"
          aria-label="ひんし"
          tabIndex={-1} //Tabキーでの選択を無効化
        >
          <img className="fainting" width="34" height="34" src={ButtonIcon} alt="" />
        </ToggleButton>
      </StyledToggleButtonGroup>
    </>
  );
}
