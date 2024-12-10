// Replicantsの型を定義
import { Player, Pokemon, Party } from '@prisma/generated/tournament';
import { pokemon } from '@prisma/generated/pokedex';

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
    Player1: BattlePokemon;
    Player2: BattlePokemon;
  };
  Ranking: {
    total: number;
    ranking: {
      [pokemon in string]: number; // 使用率
    };
  };
}
