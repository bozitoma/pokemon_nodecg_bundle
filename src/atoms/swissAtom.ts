import { Atom, atom, PrimitiveAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { PlayerSide, Swiss } from '../types/scoreboard';

// 引数オブジェクトの型
type Params = {
  playerSide: PlayerSide;
  swissResult: keyof Swiss;
};

export const swissAtomFamily = atomFamily<Params, PrimitiveAtom<number>>(
  () => atom(0),
  (a, b) => a.playerSide === b.playerSide && a.swissResult === b.swissResult
);

export const swissAtom = atomFamily<{ playerSide: PlayerSide }, Atom<Swiss>>(
  ({ playerSide }) =>
    atom((get) => ({
      win: get(swissAtomFamily({ playerSide, swissResult: 'win' })),
      lose: get(swissAtomFamily({ playerSide, swissResult: 'lose' })),
      draw: get(swissAtomFamily({ playerSide, swissResult: 'draw' })),
    })),
  (a, b) => a.playerSide === b.playerSide
);

export const swissSwapAtom = atom(null, (get, set) => {
  const player1 = {
    win: swissAtomFamily({ playerSide: 'Player1', swissResult: 'win' }),
    lose: swissAtomFamily({ playerSide: 'Player1', swissResult: 'lose' }),
    draw: swissAtomFamily({ playerSide: 'Player1', swissResult: 'draw' }),
  };
  const player2 = {
    win: swissAtomFamily({ playerSide: 'Player2', swissResult: 'win' }),
    lose: swissAtomFamily({ playerSide: 'Player2', swissResult: 'lose' }),
    draw: swissAtomFamily({ playerSide: 'Player2', swissResult: 'draw' }),
  };
  const player1Value = {
    win: get(player1.win),
    lose: get(player1.lose),
    draw: get(player1.draw),
  };
  const player2Value = {
    win: get(player2.win),
    lose: get(player2.lose),
    draw: get(player2.draw),
  };
  set(player1.win, player2Value.win);
  set(player1.lose, player2Value.lose);
  set(player1.draw, player2Value.draw);
  set(player2.win, player1Value.win);
  set(player2.lose, player1Value.lose);
  set(player2.draw, player1Value.draw);
});
