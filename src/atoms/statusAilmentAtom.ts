import { atom, PrimitiveAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { PlayerSide, PokemonNum, StatusAilment } from '../types/scoreboard';

// 引数オブジェクトの型
type Params = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const statusAilmentAtomFamily = atomFamily<Params, PrimitiveAtom<StatusAilment>>(
  () => atom('なし' as StatusAilment),
  (a, b) => a.playerSide === b.playerSide && a.pokemonNum === b.pokemonNum
);
