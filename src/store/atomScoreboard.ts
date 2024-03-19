import { atom } from 'recoil';
import { playerAtomDefaultValue } from '../types/scoreboardDefaultValue';

export const scoreboradInfoAtom = atom({
  key: 'scoreboradInfoAtom',
  default: {
    Message: '',
    TournamentName: '',
    Round: '',
    BestOf: '',
    Player1: playerAtomDefaultValue,
    Player2: playerAtomDefaultValue,
  },
});

// ↓ボタンローディング実装の時に使うかも
// export const scoreboardStartggUrlAtom = atom({
//   key: "scoreboardStartggUrlAtom",
//   default: "",
// });

// export const matchesAtom = atom<matchArray[]>({
//   key: "matchesAtom",
//   default: [],
// });

// export const matchesSelectedRowId = atom<number | undefined>({
//   key: "matchesSelectedRowId",
//   default: undefined,
// });

// export const matchesLoadingAtom = atom({
//   key: "matchesLoadingAtom",
//   default: false,
// });

// export const matchesCompletedAlertAtom = atom({
//   key: "matchesCompletedAlertAtom",
//   default: false,
// });

// export const matchesErrorAlertAtom = atom({
//   key: "matchesErrorAlertAtom",
//   default: false,
// });
