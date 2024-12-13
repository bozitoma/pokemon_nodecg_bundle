import { Avatar } from '@mui/material';
import { PlayerSide, PokemonNum } from '../../types/scoreboard';
import { StatusAilmentBadge } from './StatusAilmentBadge';
import { TerastallizeBadge } from './TerastallizeBadge';
import { FaintingBadge } from './FaintingBadge';
import { useReplicant } from '../../hooks/useReplicant';
import { useMemo } from 'react';

type Props = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const PokemonAvatar = (props: Props) => {
  const [battlePartyRep] = useReplicant('BattleParty');
  const [pokedexRep] = useReplicant('Pokedex');
  const battleState = useMemo(() => battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.battleState ?? '', [battlePartyRep, props.playerSide, props.pokemonNum]);
  const pokemonName = useMemo(() => battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.name ?? '', [battlePartyRep, props.playerSide, props.pokemonNum]);
  const pokemonIcon = useMemo(() => pokedexRep?.find((pokemon) => pokemon.name === pokemonName)?.img1 ?? '', [pokedexRep, pokemonName]);
  return (
    <>
      <StatusAilmentBadge playerSide={props.playerSide} pokemonNum={props.pokemonNum}>
        <TerastallizeBadge playerSide={props.playerSide} pokemonNum={props.pokemonNum}>
          <FaintingBadge playerSide={props.playerSide} pokemonNum={props.pokemonNum}>
            <Avatar
              variant="rounded"
              className={battleState}
              src={pokemonIcon}
              sx={{
                height: 48,
                width: 48,
              }}
            />
          </FaintingBadge>
        </TerastallizeBadge>
      </StatusAilmentBadge>
    </>
  );
};
