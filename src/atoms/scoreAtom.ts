import { atom, PrimitiveAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { PlayerSide } from '../types/scoreboard';

export const scoreAtomFamily = atomFamily<PlayerSide, PrimitiveAtom<number>>(
  () => atom(0),
  (a, b) => a === b
);

export const scoreIncrementAtom = atomFamily((playerSide: PlayerSide) =>
  atom(null, (get, set) => {
    const prev = get(scoreAtomFamily(playerSide));
    set(scoreAtomFamily(playerSide), prev + 1);
  })
);

export const scoreDecrementAtom = atomFamily((playerSide: PlayerSide) =>
  atom(null, (get, set) => {
    const prev = get(scoreAtomFamily(playerSide));
    set(scoreAtomFamily(playerSide), prev - 1);
  })
);

export const scoreResetAtom = atom(null, (_get, set) => {
  set(scoreAtomFamily('Player1'), 0);
  set(scoreAtomFamily('Player2'), 0);
});
