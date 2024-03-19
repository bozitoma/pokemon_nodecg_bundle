import { PlayerNum } from '../../types/scoreboard';
import { GraphicsPokemonAvatar } from './GraphicsPokemonAvatar';

type Props = {
  player: PlayerNum;
};

export function GraphicsParty({ player }: Props) {
  return (
    <div className={`${player}-party`}>
      <GraphicsPokemonAvatar player={player} pokemonNum="pokemon1" />
      <GraphicsPokemonAvatar player={player} pokemonNum="pokemon2" />
      <GraphicsPokemonAvatar player={player} pokemonNum="pokemon3" />
      <GraphicsPokemonAvatar player={player} pokemonNum="pokemon4" />
      <GraphicsPokemonAvatar player={player} pokemonNum="pokemon5" />
      <GraphicsPokemonAvatar player={player} pokemonNum="pokemon6" />
    </div>
  );
}
