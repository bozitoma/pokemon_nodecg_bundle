import { atom } from 'recoil';
import { topcutDefaultValue } from '../types/scoreboardDefaultValue';

export const topcutAtom = atom({
  key: 'topcutAtom',
  default: {
    Player1: topcutDefaultValue,
    Player2: topcutDefaultValue,
    Player3: topcutDefaultValue,
    Player4: topcutDefaultValue,
    Player5: topcutDefaultValue,
    Player6: topcutDefaultValue,
    Player7: topcutDefaultValue,
    Player8: topcutDefaultValue,
  },
});
