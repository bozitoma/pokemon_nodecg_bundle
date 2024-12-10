import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { playerDefaultValues } from '../../types/scoreboard/defaultValues';
import { Player, PlayerSide } from '../../types/scoreboard';

export const playerAtom = atom<Player>({
  Player1: playerDefaultValues,
  Player2: playerDefaultValues,
});

export const playerAtomFamily = atomFamily((playerSide: PlayerSide) =>
  atom(
    (get) => get(playerAtom)[playerSide],
    (_get, set, arg: typeof playerDefaultValues) => {
      set(playerAtom, (prev) => ({ ...prev, [playerSide]: { ...prev[playerSide], ...arg } }));
    }
  )
);
