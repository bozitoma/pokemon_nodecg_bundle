export interface Scoreboard {
  Message: string;
  TournamentName: string;
  Round: string;
  BestOf: string;
  Player1: Player;
  Player2: Player;
}

export interface PlayerAtom {
  name: string;
  score: number;
  swiss: {
    win: number;
    lose: number;
    draw: number;
  };
  pokemon1: Pokemon;
  pokemon2: Pokemon;
  pokemon3: Pokemon;
  pokemon4: Pokemon;
  pokemon5: Pokemon;
  pokemon6: Pokemon;
}

export interface Party {
  Player1: {
    pokemon1: Pokemon;
    pokemon2: Pokemon;
    pokemon3: Pokemon;
    pokemon4: Pokemon;
    pokemon5: Pokemon;
    pokemon6: Pokemon;
  };
  Player2: {
    pokemon1: Pokemon;
    pokemon2: Pokemon;
    pokemon3: Pokemon;
    pokemon4: Pokemon;
    pokemon5: Pokemon;
    pokemon6: Pokemon;
  };
}

export interface Pokemon {
  name: string; //ポケモン名
  icon: Pokedex;
  // type1: PokemonType; //タイプ1
  // type2: PokemonType; //タイプ2
  teraType: TerastalType; //テラスタイプ
  // level: number; //レベル
  // item: string; //持ち物
  // ability: string; //特性
  // nature: string; //性格
  // gender: Gender; //性別
  // move1: string; //わざ1
  // move2: string; //わざ2
  // move3: string; //わざ3
  // move4: string; //わざ4

  // 対戦
  battleState: BattleState; //選出状況
  statusAilment: StatusAilment; //状態異常
  terastallize: boolean; //テラスタルをしたことを示す真偽値
  terastalButton: boolean; //テラスタルボタンを1体だけに適用するための真偽値
}

export type EntryParty = {
  id: number;
  accountID: string;
  player_name: string;
  pokemon1: string;
  pokemon2: string;
  pokemon3: string;
  pokemon4: string;
  pokemon5: string;
  pokemon6: string;
};

export type EntryPokemon = {
  id: number;
  accountID: string;
  player_name: string;
  pokemon_name: string;
  type1: PokemonType_JP;
  type2: PokemonType_JP;
  teraType: TerastalType_JP;
  abillity: string;
  item: string;
  move1: string;
  move2: string;
  move3: string;
  move4: string;
};

export type EntryMargeParty = {
  id: number;
  accountID: string;
  player_name: string;
  pokemon1: EntryMargePokemon;
  pokemon2: EntryMargePokemon;
  pokemon3: EntryMargePokemon;
  pokemon4: EntryMargePokemon;
  pokemon5: EntryMargePokemon;
  pokemon6: EntryMargePokemon;
};

export type EntryMargePokemon = {
  name: string;
  teraType: TerastalType_JP;
};

export type BattleState = 'Benched' | 'Active' | 'Fainting';

export type StatusAilment = 'なし' | 'PSN' | 'BRN' | 'FRZ' | 'PAR' | 'SLP' | undefined;

export type Gender = 'male' | 'female' | 'none';

export type Gender_JP = '♂' | '♀' | 'なし';

export type PokemonType =
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
  | 'none'
  | undefined;

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
  | undefined;

export type PokemonType_JP =
  | 'ノーマル'
  | 'ほのお'
  | 'みず'
  | 'くさ'
  | 'でんき'
  | 'こおり'
  | 'かくとう'
  | 'どく'
  | 'じめん'
  | 'ひこう'
  | 'エスパー'
  | 'むし'
  | 'いわ'
  | 'ゴースト'
  | 'ドラゴン'
  | 'あく'
  | 'はがね'
  | 'フェアリー'
  | 'なし';

export type TerastalType_JP =
  | 'ノーマル'
  | 'ほのお'
  | 'みず'
  | 'くさ'
  | 'でんき'
  | 'こおり'
  | 'かくとう'
  | 'どく'
  | 'じめん'
  | 'ひこう'
  | 'エスパー'
  | 'むし'
  | 'いわ'
  | 'ゴースト'
  | 'ドラゴン'
  | 'あく'
  | 'はがね'
  | 'フェアリー'
  | 'ステラ';

export type PlayerNum = 'Player1' | 'Player2';

export type PokemonNum =
  | 'pokemon1'
  | 'pokemon2'
  | 'pokemon3'
  | 'pokemon4'
  | 'pokemon5'
  | 'pokemon6';
