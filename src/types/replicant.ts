// Replicantsの型を定義
import type { StatusAilment, TerastalType } from '../types/scoreboard';

export interface ReplicantMap {
  // Player1
  Player1Name: string;
  Player1Score: number;
  Player1Poke1Icon: string;
  Player1Poke2Icon: string;
  Player1Poke3Icon: string;
  Player1Poke4Icon: string;
  Player1Poke5Icon: string;
  Player1Poke6Icon: string;

  Player1Poke1BattleStatus: string;
  Player1Poke2BattleStatus: string;
  Player1Poke3BattleStatus: string;
  Player1Poke4BattleStatus: string;
  Player1Poke5BattleStatus: string;
  Player1Poke6BattleStatus: string;

  Player1Poke1Terastallized: boolean;
  Player1Poke2Terastallized: boolean;
  Player1Poke3Terastallized: boolean;
  Player1Poke4Terastallized: boolean;
  Player1Poke5Terastallized: boolean;
  Player1Poke6Terastallized: boolean;

  Player1Poke1StatusAilment: StatusAilment;
  Player1Poke2StatusAilment: StatusAilment;
  Player1Poke3StatusAilment: StatusAilment;
  Player1Poke4StatusAilment: StatusAilment;
  Player1Poke5StatusAilment: StatusAilment;
  Player1Poke6StatusAilment: StatusAilment;

  // Player2
  Player2Name: string;
  Player2Score: number;
  Player2Poke1Icon: string;
  Player2Poke2Icon: string;
  Player2Poke3Icon: string;
  Player2Poke4Icon: string;
  Player2Poke5Icon: string;
  Player2Poke6Icon: string;

  Player2Poke1BattleStatus: string;
  Player2Poke2BattleStatus: string;
  Player2Poke3BattleStatus: string;
  Player2Poke4BattleStatus: string;
  Player2Poke5BattleStatus: string;
  Player2Poke6BattleStatus: string;

  Player2Poke1Terastallized: boolean;
  Player2Poke2Terastallized: boolean;
  Player2Poke3Terastallized: boolean;
  Player2Poke4Terastallized: boolean;
  Player2Poke5Terastallized: boolean;
  Player2Poke6Terastallized: boolean;

  Player2Poke1StatusAilment: StatusAilment;
  Player2Poke2StatusAilment: StatusAilment;
  Player2Poke3StatusAilment: StatusAilment;
  Player2Poke4StatusAilment: StatusAilment;
  Player2Poke5StatusAilment: StatusAilment;
  Player2Poke6StatusAilment: StatusAilment;

  Player1Poke1TerastalType: TerastalType;
  Player1Poke2TerastalType: TerastalType;
  Player1Poke3TerastalType: TerastalType;
  Player1Poke4TerastalType: TerastalType;
  Player1Poke5TerastalType: TerastalType;
  Player1Poke6TerastalType: TerastalType;

  Player2Poke1TerastalType: TerastalType;
  Player2Poke2TerastalType: TerastalType;
  Player2Poke3TerastalType: TerastalType;
  Player2Poke4TerastalType: TerastalType;
  Player2Poke5TerastalType: TerastalType;
  Player2Poke6TerastalType: TerastalType;

  // BattleInfo
  RoundInfo: string;
  BestOfInfo: string;
  Timer: string;
}

// Replicantsの初期値を定義
export const replicantDefaultValues: ReplicantMap = {
  // Player1
  Player1Name: 'Player1',
  Player1Score: 0,
  Player1Poke1Icon: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',
  Player1Poke2Icon: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',
  Player1Poke3Icon: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',
  Player1Poke4Icon: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',
  Player1Poke5Icon: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',
  Player1Poke6Icon: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',

  Player1Poke1BattleStatus: 'Benched',
  Player1Poke2BattleStatus: 'Benched',
  Player1Poke3BattleStatus: 'Benched',
  Player1Poke4BattleStatus: 'Benched',
  Player1Poke5BattleStatus: 'Benched',
  Player1Poke6BattleStatus: 'Benched',

  Player1Poke1Terastallized: false,
  Player1Poke2Terastallized: false,
  Player1Poke3Terastallized: false,
  Player1Poke4Terastallized: false,
  Player1Poke5Terastallized: false,
  Player1Poke6Terastallized: false,

  Player1Poke1StatusAilment: '',
  Player1Poke2StatusAilment: '',
  Player1Poke3StatusAilment: '',
  Player1Poke4StatusAilment: '',
  Player1Poke5StatusAilment: '',
  Player1Poke6StatusAilment: '',

  // Player2
  Player2Name: 'Player2',
  Player2Score: 0,
  Player2Poke1Icon: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',
  Player2Poke2Icon: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',
  Player2Poke3Icon: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',
  Player2Poke4Icon: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',
  Player2Poke5Icon: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',
  Player2Poke6Icon: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',

  Player2Poke1BattleStatus: 'Benched',
  Player2Poke2BattleStatus: 'Benched',
  Player2Poke3BattleStatus: 'Benched',
  Player2Poke4BattleStatus: 'Benched',
  Player2Poke5BattleStatus: 'Benched',
  Player2Poke6BattleStatus: 'Benched',

  Player2Poke1Terastallized: false,
  Player2Poke2Terastallized: false,
  Player2Poke3Terastallized: false,
  Player2Poke4Terastallized: false,
  Player2Poke5Terastallized: false,
  Player2Poke6Terastallized: false,

  Player2Poke1StatusAilment: '',
  Player2Poke2StatusAilment: '',
  Player2Poke3StatusAilment: '',
  Player2Poke4StatusAilment: '',
  Player2Poke5StatusAilment: '',
  Player2Poke6StatusAilment: '',

  Player1Poke1TerastalType: 'normal',
  Player1Poke2TerastalType: 'normal',
  Player1Poke3TerastalType: 'normal',
  Player1Poke4TerastalType: 'normal',
  Player1Poke5TerastalType: 'normal',
  Player1Poke6TerastalType: 'normal',

  Player2Poke1TerastalType: 'normal',
  Player2Poke2TerastalType: 'normal',
  Player2Poke3TerastalType: 'normal',
  Player2Poke4TerastalType: 'normal',
  Player2Poke5TerastalType: 'normal',
  Player2Poke6TerastalType: 'normal',

  // BattleInfo
  RoundInfo: 'Round',
  BestOfInfo: 'Best of 1',
  Timer: '00:00',
};
