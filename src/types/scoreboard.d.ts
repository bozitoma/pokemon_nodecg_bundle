export interface Scoreboard {
  Player1: Player;
  Player2: Player;
  RoundInfo: string;
}

export interface Player {
  name: string;
  pokemon1: Party;
  pokemon2: Party;
  pokemon3: Party;
  pokemon4: Party;
  pokemon5: Party;
  pokemon6: Party;
}

export interface Party {
  name: string; //ポケモン名
  type1: string; //タイプ1
  type2: string; //タイプ2
  teratype: string; //テラスタイプ
  level: string; //レベル
  item: string; //持ち物
  ability: string; //特性
  nature: string; //性格
  gender: string; //性別
  waza1: string; //わざ1
  waza2: string; //わざ2
  waza3: string; //わざ3
  waza4: string; //わざ4
}

export type StatusAilment = '' | 'PSN' | 'BRN' | 'FRZ' | 'PAR' | 'SLP' | string | undefined;

export type TerastalType =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy'
  | 'stellar'
  | string
  | undefined;
