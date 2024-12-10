import { Avatar, Badge, styled } from '@mui/material';
import { memo, ReactNode, useMemo } from 'react';
import { PlayerSide, PokemonNum } from '../../types/scoreboard';
import FTN from '../../assets/StatusAilment/FTN.png';
import { useReplicant } from '../../hooks/useReplicant';

const FaintingAvatar = styled(Avatar)(() => ({
  width: 16,
  height: 16,
}));

type Props = {
  children: ReactNode;
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const FaintingBadge = memo((props: Props) => {
  const [battlePartyRep] = useReplicant('BattleParty');
  const battleState = useMemo(
    () => battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.battleState ?? 'Benched',
    [battlePartyRep, props.playerSide, props.pokemonNum]
  );
  return (
    <Badge
      id={`${props.playerSide}-${props.pokemonNum}-FaintingIcon`}
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={
        <FaintingAvatar
          variant="rounded"
          style={battleState === 'Fainting' ? { visibility: 'visible' } : { visibility: 'hidden' }}
          src={FTN}
        />
      }
    >
      {props.children}
    </Badge>
  );
});
