import { SelectChangeEvent, Stack, ToggleButton } from '@mui/material';
import { useBattleToggleButton } from '../hooks/useBattleToggleButton';
import { TerastalTypeSelector } from './TerastalTypeSelector';
import { TerastalType } from '../types/scoreboard';

type Props = {
  terastallize: boolean;
  handleTerastallized: () => void;
  isTerastallize: boolean;
  handleChangeTerastalType: (event: SelectChangeEvent) => void;
  terastalType: TerastalType;
};

export function TerastalButton({
  terastallize,
  handleTerastallized,
  isTerastallize,
  terastalType,
  handleChangeTerastalType,
}: Props) {
  const { StyledToggleButtonGroup } = useBattleToggleButton();

  return (
    <>
      <Stack spacing={1} direction="row">
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
        <TerastalTypeSelector
          terastalType={terastalType}
          handleChangeTerastalType={handleChangeTerastalType}
        />
      </Stack>
    </>
  );
}
