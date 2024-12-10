import { atom, PrimitiveAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { BattleState, PlayerSide, PokemonNum } from '../types/scoreboard';

// 引数オブジェクトの型
type Params = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const battleStateAtomFamily = atomFamily<Params, PrimitiveAtom<BattleState>>(
  () => atom('Benched' as BattleState),
  (a, b) => a.playerSide === b.playerSide && a.pokemonNum === b.pokemonNum
);
