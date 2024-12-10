import { Atom, atom, PrimitiveAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { PlayerSide, PokemonNum } from '../../types/scoreboard';

// 引数オブジェクトの型
type Params = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

// const todosAtom = atom<{ [key in string]: string }>({ name: 'a' });

export const testAtomFamily = atomFamily<Params, PrimitiveAtom<boolean>>(
  () => atom(false),
  (a, b) => a.playerSide === b.playerSide
);

export const testAtom = atomFamily<Params, Atom<boolean>>(
  (params) => atom((get) => get(testAtomFamily(params))),
  (a, b) => a.playerSide === b.playerSide
);

// export const todoFamilyAtom = atomFamily((name: string) =>
//   atom(
//     (get) => get(todosAtom)[name],
//     (get, set, arg: string) => {
//       const prev = get(todosAtom);
//       set(todosAtom, { ...prev, [name]: arg });
//     }
//   )
// );
