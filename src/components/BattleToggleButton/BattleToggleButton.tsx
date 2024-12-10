import './style.css';
import { ToggleButton } from '@mui/material';
import { PokemonNum, BattleState, PlayerSide } from '../../types/scoreboard';
import BALL from '../../assets/BALL_icon.png';
import { StyledToggleButtonGroup } from './BattleToggleButton.style';
import { useCallback, useMemo } from 'react';
import { useReplicant } from '../../hooks/useReplicant';

type Props = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const BattleToggleButton = (props: Props) => {
  const [battlePartyRep, setBattlePartyRep] = useReplicant('BattleParty');
  const battleState = useMemo(
    () => battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.battleState ?? 'Benched',
    [battlePartyRep, props.playerSide, props.pokemonNum]
  );
  const handleChangeBattleState = useCallback(
    (_event: unknown, newBattleState: BattleState | null) => {
      if (newBattleState != null && battlePartyRep) {
        setBattlePartyRep({
          ...battlePartyRep,
          [props.playerSide]: {
            ...battlePartyRep[props.playerSide],
            [props.pokemonNum]: {
              ...battlePartyRep[props.playerSide][props.pokemonNum],
              battleState: newBattleState,
            },
          },
        });
      }
    },
    [battlePartyRep, props.playerSide, props.pokemonNum]
  );
  return (
    <>
      <StyledToggleButtonGroup
        id={`${props.playerSide}-${props.pokemonNum}-BattleToggleButton`}
        className="toggleBotton"
        size="small"
        value={battleState}
        exclusive
        onChange={handleChangeBattleState}
      >
        <ToggleButton value="Benched" aria-label="ベンチ" tabIndex={-1}>
          <img className="Benched" width="34" height="34" src={BALL} alt="ベンチのアイコン" />
        </ToggleButton>
        <ToggleButton value="Active" aria-label="バトル" tabIndex={-1}>
          <img width="34" height="34" src={BALL} alt="バトルのアイコン" />
        </ToggleButton>
        <ToggleButton value="Fainting" aria-label="ひんし" tabIndex={-1}>
          <img className="Fainting" width="34" height="34" src={BALL} alt="ひんしのアイコン" />
        </ToggleButton>
      </StyledToggleButtonGroup>
    </>
  );
};
