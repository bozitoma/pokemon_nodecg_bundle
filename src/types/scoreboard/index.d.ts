import { playerDefaultValues } from "../utils/defaultValues/replicat";

export type PlayerInfo = {
  name: string;
  score: number;
  swiss: Swiss;
};
export type PlayerSide = `Player${1 | 2}`;
export type Player = {
  [player in PlayerSide]: typeof playerDefaultValues;
};
export type Swiss = {
  win: number;
  lose: number;
  draw: number;
};
export type BattlePokemon = {
  name: string; //ポケモン名
  // icon: Pokedex;
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
export type PokemonNum = `pokemon${1 | 2 | 3 | 4 | 5 | 6}`
export type Party = { [pokemon in PokemonNum]: Pokemon };
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

