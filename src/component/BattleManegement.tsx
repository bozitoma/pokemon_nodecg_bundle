import { Box, Divider, SelectChangeEvent } from '@mui/material';
import { BattleToggleButton } from './BattleToggleButoon';
import { PokemonSelector } from './PokemonSelector';
import { MouseEvent } from 'react';
import { TerastalButton } from './TerastalButton';
import { StatusAilmentSelector } from './StatusAilmentSelector';
import type { StatusAilment } from '../types/scoreboard';

type Props = {
  alignment: string;
  handleAlignment: (_event: MouseEvent<HTMLElement>, newAlignment: string | null) => void;
  className: string;
  terastallize: boolean;
  handleTerastallized: () => void;
  statusAilment: StatusAilment;
  handleChangeStatusAilment: (event: SelectChangeEvent) => void;
  isTerastallize: boolean;
  repPokemonIcon: (newValue: string) => void;
  repBattleStatus: (newValue: string) => void;
  repTerastallized: (newValue: boolean) => void;
  repStatusAilment: (newValue: StatusAilment) => void;
};

export function BattleManegement({
  alignment,
  handleAlignment,
  className,
  terastallize,
  handleTerastallized,
  statusAilment,
  handleChangeStatusAilment,
  isTerastallize,
  repPokemonIcon,
  repBattleStatus,
  repTerastallized,
  repStatusAilment,
}: Props) {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PokemonSelector
          className={className}
          terastallize={terastallize}
          statusAilment={statusAilment}
          repPokemonIcon={repPokemonIcon}
          repBattleStatus={repBattleStatus}
          repTerastallized={repTerastallized}
          repStatusAilment={repStatusAilment}
        />
        <BattleToggleButton alignment={alignment} handleAlignment={handleAlignment} />
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <TerastalButton
          terastallize={terastallize}
          handleTerastallized={handleTerastallized}
          isTerastallize={isTerastallize}
        />
        <StatusAilmentSelector
          statusAilment={statusAilment}
          handleChangeStatusAilment={handleChangeStatusAilment}
        />
      </Box>
      <Divider sx={{ mx: 0.5, my: 1 }} />
    </>
  );
}
