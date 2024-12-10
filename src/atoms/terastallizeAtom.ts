import { Atom, atom, PrimitiveAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { PlayerSide, PokemonNum } from '../types/scoreboard';

// 引数オブジェクトの型
type Params = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const isTerastallizeAtomFamily = atomFamily<Params, PrimitiveAtom<boolean>>(
  () => atom(false),
  (a, b) => a.playerSide === b.playerSide && a.pokemonNum === b.pokemonNum
);

export const usedTerastallizeAtom = atomFamily<Params, Atom<boolean>>(
  (params) =>
    atom((get) => {
      // テラスタル中のポケモンはテラスタルボタンを押せるようにする
      if (get(isTerastallizeAtomFamily(params))) return false;

      // パーティ中に1匹でもテラスタルを使用していたら他のポケモンはテラスタルボタンを押せない
      const pokemonNums: PokemonNum[] = [
        'pokemon1',
        'pokemon2',
        'pokemon3',
        'pokemon4',
        'pokemon5',
        'pokemon6',
      ];
      const usedTerastallize = pokemonNums
        .map((pokemonNum) =>
          get(isTerastallizeAtomFamily({ playerSide: params.playerSide, pokemonNum }))
        )
        .includes(true);
      if (usedTerastallize) return true;
      return false;
    }),
  (a, b) => a.playerSide === b.playerSide && a.pokemonNum === b.pokemonNum
);
