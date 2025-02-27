// Replicantsの型を定義
import { Player, Pokemon, Party } from '../../prisma/generated/tournament';
import { pokemon } from '../../prisma/generated/pokedex';
import { PokemonRankingData, KPResult, LegendaryRankingData } from './ranking';
import { BattlePokemon, PokemonNum } from './scoreboard';

export interface ReplicantMap {
  Pokedex: pokemon[]; // ポケモン図鑑
  Player: Player[]; // 大会参加プレイヤー
  Topcut: {
    total: number; // トップカットのプレイヤー数
    players: {
      place: number; // 順位
      name: string; // プレイヤー名
      party: string[]; // パーティ
    }[];
  };
  Parties: Party[]; // 大会に出場するパーティ
  Pokemon: Pokemon[]; // 大会に出場するポケモン
  Timer: {
    min: number;
    sec: number;
    isRunning: boolean;
  };
  SelectTime: {
    min: number;
    sec: number;
  };
  Scoreboard: {
    Round: string;
    BestOf: string;
    Player1: PlayerInfo;
    Player2: PlayerInfo;
  };
  BattleParty: {
    Player1: { [pokemon in PokemonNum]: BattlePokemon };
    Player2: { [pokemon in PokemonNum]: BattlePokemon };
  };
  Ranking: {
    total: number;
    ranking: {
      [pokemon in string]: number; // 使用率
    };
  };
  KP: KPResult;
  K2P: KPResult;
  K3P: KPResult;
  K4P: KPResult;
  K5P: KPResult;
  K6P: KPResult;
  Topcut_KP: KPResult;
  Topcut_K2P: KPResult;
  Topcut_K3P: KPResult;
  Topcut_K4P: KPResult;
  Topcut_K5P: KPResult;
  Topcut_K6P: KPResult;
  PokemonRanking: PokemonRankingData;
  Topcut_PokemonRanking: PokemonRankingData;
  PokemonData: {
    name: string;
    rank: number;
    total: number;
    teraType: { [teraType in string]: number; };
    ability: { [ability in string]: number; };
    item: { [item in string]: number; };
    moves: { [move in string]: number; };
  };
  LegendaryRanking: LegendaryRankingData;
}
