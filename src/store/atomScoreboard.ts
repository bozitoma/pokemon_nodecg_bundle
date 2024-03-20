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
