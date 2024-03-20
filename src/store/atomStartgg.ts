import { atom } from 'recoil';

// Start.GG類のコンポーネントに使用
export const scoreboardStartggUrlAtom = atom({
  key: 'scoreboardStartggUrlAtom',
  default: '',
});

export const matchesAtom = atom<matchArray[]>({
  key: 'matchesAtom',
  default: [],
});

export const matchesSelectedRowId = atom<number | undefined>({
  key: 'matchesSelectedRowId',
  default: undefined,
});

export const matchesLoadingAtom = atom({
  key: 'matchesLoadingAtom',
  default: false,
});

export const matchesCompletedAlertAtom = atom({
  key: 'matchesCompletedAlertAtom',
  default: false,
});

export const matchesErrorAlertAtom = atom({
  key: 'matchesErrorAlertAtom',
  default: false,
});
