import { Avatar, Badge, styled } from '@mui/material';
import { memo, ReactNode, useMemo } from 'react';
import { PlayerSide, PokemonNum, TerastalType } from '../../types/scoreboard';
import { useReplicant } from '../../hooks/useReplicant';

const getTerastalIcon = (fileName: TerastalType): string => {
  return new URL(
    `../../assets/terastal_icon/icon_terastal_type_${fileName}.png`,
    import.meta.url
  ).href;
};

const TerastalAvatar = styled(Avatar)(() => ({
  width: 24,
  height: 24,
}));

type Props = {
  children: ReactNode;
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const TerastallizeBadge = memo((props: Props) => {
  const [battlePartyRep] = useReplicant('BattleParty');
  const teraType = useMemo(
    () => battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.teraType ?? 'normal',
    [battlePartyRep, props.playerSide, props.pokemonNum]
  );
  const isTerastallize = useMemo(
    () => battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.terastallize ?? false,
    [battlePartyRep, props.playerSide, props.pokemonNum]
  );
  const battleState = useMemo(
    () => battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.battleState ?? 'Benched',
    [battlePartyRep, props.playerSide, props.pokemonNum]
  );
  return (
    <Badge
      id={`${props.playerSide}-${props.pokemonNum}-TerastallizeIcon`}
      overlap="circular"
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      badgeContent={
        <TerastalAvatar
          variant="rounded"
          style={
            isTerastallize === true && battleState !== 'Benched'
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
          src={getTerastalIcon(teraType)}
        />
      }
    >
      {props.children}
    </Badge>
  );
});
