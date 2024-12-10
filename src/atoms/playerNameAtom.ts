import { atom, PrimitiveAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { PlayerSide } from '../types/scoreboard';

export const playerNameAtomFamily = atomFamily<PlayerSide, PrimitiveAtom<string>>(
  () => atom(''),
  (a, b) => a === b
);

export const playerNameSwapAtom = atom(null, (get, set) => {
  const player1 = get(playerNameAtomFamily('Player1'));
  const player2 = get(playerNameAtomFamily('Player2'));
  set(playerNameAtomFamily('Player1'), player2);
  set(playerNameAtomFamily('Player2'), player1);
});
