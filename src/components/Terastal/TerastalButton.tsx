import { ToggleButton } from '@mui/material';
import { PlayerSide, PokemonNum } from '../../types/scoreboard';
import { StyledToggleButtonGroup } from './TerastalButton.style';
import { memo, useCallback, useMemo } from 'react';
import { useReplicant } from '../../hooks/useReplicant';

type Props = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const TerastalButton = memo((props: Props) => {
  const [battlePartyRep, setBattlePartyRep] = useReplicant('BattleParty');
  const terastallize = useMemo(
    () => battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.terastallize ?? false,
    [battlePartyRep, props.playerSide, props.pokemonNum]
  );
  const usedTerastallize = useMemo(
    () => {
      const party = battlePartyRep?.[props.playerSide];
      if (party?.[props.pokemonNum]?.terastallize === true) return false;
      return Object.values(party ?? {})
        .map((pokemon) => pokemon.terastallize)
        .includes(true);
    },
    [battlePartyRep, props.playerSide, props.pokemonNum]
  );
  const onChange = useCallback(() => {
    if (!battlePartyRep) return;
    setBattlePartyRep({
      ...battlePartyRep,
      [props.playerSide]: {
        ...battlePartyRep[props.playerSide],
        [props.pokemonNum]: { ...battlePartyRep[props.playerSide][props.pokemonNum], terastallize: !terastallize },
      },
    });
  }, [battlePartyRep, props.playerSide, props.pokemonNum, terastallize]);
  return (
    <StyledToggleButtonGroup
      id={`${props.playerSide}-${props.pokemonNum}-TerastalButton`}
      size="small"
      onChange={onChange}
    >
      <ToggleButton
        value="terastal"
        aria-label="terastal"
        selected={terastallize}
        color="error"
        disabled={usedTerastallize}
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
});
