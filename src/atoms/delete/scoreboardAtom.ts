import { atom } from 'jotai';
// import { atomFamily } from 'jotai/utils';
// import { playerDefaultValues } from '../defaultValues/scoreboard';
import { Scoreboard } from '../../types/scoreboard';
// import { phases } from '../defaultValues/scoreboard';

export const scoreboardAtom = atom<Scoreboard>({
  Round: '',
  Bestof: '',
});

// export const playerAtom = atom<Player>({
//   Red: playerDefaultValues,
//   Blue: playerDefaultValues,
// });

// export const lifeAtom = atom<Life>({
//   Red: 8000,
//   Blue: 8000,
// });

// export const playerAtomFamily = atomFamily((playerSide: Turn) =>
//   atom(
//     (get) => get(playerAtom)[playerSide],
//     (_get, set, arg: typeof playerDefaultValues) => {
//       set(playerAtom, (prev) => ({ ...prev, [playerSide]: { ...prev[playerSide], ...arg } }));
//     }
//   )
// );

// export const playerNameAtomFamily = atomFamily((playerSide: Turn) =>
//   atom(
//     (get) => get(playerAtom)[playerSide].name,
//     (_get, set, str: string) => {
//       set(playerAtom, (prev) => ({ ...prev, [playerSide]: { ...prev[playerSide], name: str } }));
//     }
//   )
// );

// export const playerNameSwapAtom = atom(null, (_get, set) => {
//   set(playerAtom, (prev) => ({
//     Red: {
//       ...prev.Red,
//       name: prev.Blue.name,
//     },
//     Blue: {
//       ...prev.Blue,
//       name: prev.Red.name,
//     },
//   }));
// });

// export const decktypeAtomFamily = atomFamily((playerSide: Turn) =>
//   atom(
//     (get) => get(playerAtom)[playerSide].decktype,
//     (_get, set, str: string) => {
//       set(playerAtom, (prev) => ({
//         ...prev,
//         [playerSide]: { ...prev[playerSide], decktype: str },
//       }));
//     }
//   )
// );

// export const decktypeSwapAtom = atom(null, (_get, set) => {
//   set(playerAtom, (prev) => ({
//     Red: {
//       ...prev.Red,
//       decktype: prev.Blue.decktype,
//     },
//     Blue: {
//       ...prev.Blue,
//       decktype: prev.Red.decktype,
//     },
//   }));
// });

// export const lifeAtomFamily = atomFamily((playerSide: Turn) =>
//   atom(
//     (get) => get(lifeAtom)[playerSide],
//     (_get, set, newLife: number) => {
//       set(lifeAtom, (prev) => ({
//         ...prev,
//         [playerSide]: newLife,
//       }));
//     }
//   )
// );

// export const life100IncrementAtom = atomFamily((playerSide: Turn) =>
//   atom(null, (_get, set) => {
//     set(lifeAtom, (prev) => ({
//       ...prev,
//       [playerSide]:   prev[playerSide] + 100 ,
//     }));
//   })
// );

// export const life1000IncrementAtom = atomFamily((playerSide: Turn) =>
//   atom(null, (_get, set) => {
//     set(lifeAtom, (prev) => ({
//       ...prev,
//       [playerSide]: prev[playerSide] + 1000 ,
//     }));
//   })
// );

// export const life100DecrementAtom = atomFamily((playerSide: Turn) =>
//   atom(null, (_get, set) => {
//     set(lifeAtom, (prev) => ({
//       ...prev,
//       [playerSide]:  0 <= prev[playerSide] - 100 ? prev[playerSide] - 100 : 0,
//     }));
//   })
// );

// export const life1000DecrementAtom = atomFamily((playerSide: Turn) =>
//   atom(null, (_get, set) => {
//     set(lifeAtom, (prev) => ({
//       ...prev,
//       [playerSide]:
//        0 <= prev[playerSide] - 1000 ? prev[playerSide] - 1000 : 0,

//     }));
//   })
// );

// export const lifeHalfAtom = atomFamily((playerSide: Turn) =>
//   atom(null, (_get, set) => {
//     set(lifeAtom, (prev) => ({
//       ...prev,
//       [playerSide]: Math.ceil(prev[playerSide] / 2)
//     }));
//   })
// );

// export const lifeResetAtom = atomFamily((playerSide: Turn) =>
//   atom(null, (_get, set) => {
//     set(lifeAtom, (prev) => ({
//       ...prev,
//       [playerSide]:  8000 ,
//     }));
//   })
// );

// export const cardAtomFamily = atomFamily((playerSide: Turn) =>
//   atom(
//     (get) => get(playerAtom)[playerSide].card,
//     (_get, set, str: string) => {
//       set(playerAtom, (prev) => ({
//         ...prev,
//         [playerSide]: { ...prev[playerSide], card: str },
//       }));
//     }
//   )
// );

// export const scoreAtomFamily = atomFamily((playerSide: Turn) =>
//   atom(
//     (get) => get(playerAtom)[playerSide].score,
//     (_get, set, num: number) => {
//       set(playerAtom, (prev) => ({
//         ...prev,
//         [playerSide]: { ...prev[playerSide], score: num },
//       }));
//     }
//   )
// );

// export const scoreIncrementAtom = atomFamily((playerSide: Turn) =>
//   atom(null, (_get, set) => {
//     set(playerAtom, (prev) => ({
//       ...prev,
//       [playerSide]: { ...prev[playerSide], score: prev[playerSide].score + 1 },
//     }));
//   })
// );

// export const scoreDecrementAtom = atomFamily((playerSide: Turn) =>
//   atom(null, (_get, set) => {
//     set(playerAtom, (prev) => ({
//       ...prev,
//       [playerSide]: { ...prev[playerSide], score: prev[playerSide].score - 1 },
//     }));
//   })
// );

// export const scoreResetAtom = atom(null, (_get, set) => {
//   set(playerAtom, (prev) => ({
//     Red: {
//       ...prev.Red,
//       score: 0,
//     },
//     Blue: {
//       ...prev.Blue,
//       score: 0,
//     },
//   }));
// });

// export const phaseAtom = atom(
//   (get) => get(scoreboardAtom).Phase,
//   (_get, set, newPhase: Phase) => {
//     set(scoreboardAtom, (prev) => ({
//       ...prev,
//       Phase: newPhase,
//     }));
//   }
// );

// export const turnAtom = atom(
//   (get) => get(scoreboardAtom).Turn,
//   (_get, set, newTurn: Turn) => {
//     set(scoreboardAtom, (prev) => ({
//       ...prev,
//       Turn: newTurn,
//     }));
//   }
// );

// export const nextTurnAtom = atom(null, (_get, set) => {
//   set(scoreboardAtom, (prev) => ({
//     ...prev,
//     Phase: 'DRAW PHASE',
//     Turn: prev.Turn === 'Red' ? 'Blue' : 'Red',
//   }));
// });

// export const changeTurnAtom = atom(null, (_get, set) => {
//   set(scoreboardAtom, (prev) => ({
//     ...prev,
//     Turn: prev.Turn === 'Red' ? 'Blue' : 'Red',
//   }));
// });

// export const nextPhaseAtom = atom(null, (get, set) => {
//   const nowPhase = phases.indexOf(get(phaseAtom));
//   const endPhase = nowPhase === phases.length - 1;
//   const nextPhase = endPhase ? 0 : nowPhase + 1;
//   set(phaseAtom, phases[nextPhase]);
//   if (endPhase) set(changeTurnAtom);
// });

// export const prevPhaseAtom = atom(null, (get, set) => {
//   const nowPhase = phases.indexOf(get(phaseAtom));
//   const drawPhase = nowPhase === 0;
//   const prevPhase = drawPhase ? phases.length - 1 : nowPhase - 1;
//   set(phaseAtom, phases[prevPhase]);
//   if (drawPhase) set(changeTurnAtom);
// });

// export const restartAtom = atom(null, (_get, set) => {
//   set(scoreboardAtom, (prev) => ({
//     ...prev,
//     Phase: 'DRAW PHASE',
//     Turn: 'Red',
//   }));
// });
