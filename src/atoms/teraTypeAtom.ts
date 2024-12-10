import { atom, PrimitiveAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { PlayerSide, PokemonNum, TerastalType } from '../types/scoreboard';

// 引数オブジェクトの型
type Params = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const teraTypeAtomFamily = atomFamily<Params, PrimitiveAtom<TerastalType>>(
  () => atom('normal' as TerastalType),
  (a, b) => a.playerSide === b.playerSide && a.pokemonNum === b.pokemonNum
);
