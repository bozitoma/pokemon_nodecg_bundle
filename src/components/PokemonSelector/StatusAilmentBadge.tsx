import { Avatar, Badge, styled } from '@mui/material';
import { memo, ReactNode, useMemo } from 'react';
// import { statusAilmentAtomFamily } from '../../atoms/statusAilmentAtom';
// import { useAtomValue } from 'jotai';
import { PlayerSide, PokemonNum, StatusAilment } from '../../types/scoreboard';
import { useReplicant } from '../../hooks/useReplicant';
// import { battleStateAtomFamily } from '../../atoms/battleStateAtom';

const getStatusAilmentIcon = (fileName: StatusAilment): string => {
  return new URL(`../../assets/StatusAilment/${fileName}.png`, import.meta.url).href;
};

const StatusAilmentlAvatar = styled(Avatar)(() => ({
  width: 16,
  height: 16,
}));

type Props = {
  children: ReactNode;
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const StatusAilmentBadge = memo((props: Props) => {
  const [battlePartyRep] = useReplicant('BattleParty');
  const battleState = useMemo(() => battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.battleState ?? 'Benched', [battlePartyRep, props.playerSide, props.pokemonNum]);
  const statusAilment = useMemo(() => battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.statusAilment ?? 'なし', [battlePartyRep, props.playerSide, props.pokemonNum]);
  const statusAilmentIcon = useMemo(() => statusAilment !== 'なし' && battleState === 'Active' ? getStatusAilmentIcon(statusAilment) : '', [statusAilment, battleState]);
  return (
    <Badge
      id={`${props.playerSide}-${props.pokemonNum}-StatusAilmentIcon`}
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={
        <StatusAilmentlAvatar
          variant="rounded"
          style={
            statusAilment !== 'なし' && battleState === 'Active'
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
          src={statusAilmentIcon}
        />
      }
    >
      {props.children}
    </Badge>
  );
});
