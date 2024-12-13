import { memo } from 'react';
import { PlayerSide } from '../../../types/scoreboard';
import { pokemonNumList } from '../../../utils/const';
import { PokemonAvatarGraphics } from './PokemonAvatar.graphics';

export const PartyGraphics = memo(({ playerSide }: { playerSide: PlayerSide }) => {
  return (
    <div className={`${playerSide}-party`}>
      {pokemonNumList.map((pokemonNum) => (
        <PokemonAvatarGraphics playerSide={playerSide} pokemonNum={pokemonNum} />
      ))}
    </div>
  );
});
