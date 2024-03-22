import NodeCG from '@nodecg/types';
import Database from 'better-sqlite3';
import { EntryMargeParty, EntryParty, EntryPokemon } from '../types/scoreboard';
import { KP, RankingContents, ConvertedRanking } from '../types/replicant';
import { pokedex } from './pokedex';

type PartyType = readonly EntryParty[];
type PokemonType = readonly EntryPokemon[];
type KPType = readonly KP[];

type MargePartyType = readonly EntryMargeParty[];

// SQlite内では配列はstring型として格納されているので、取り出す際はitem~moveはstringとして定義する
type queryRanking = {
  id: number;
  pokemon: string;
  item: string;
  ability: string;
  teraType: string;
  move: string;
};

export default (nodecg: NodeCG.ServerAPI) => {
  // Pokedexをインポートするextension
  pokedex(nodecg);

  // サーバー側にログを出す場合のコード
  // const log = new nodecg.Logger('partyLog');
  // log.info(repParty.value);
  const repParty = nodecg.Replicant('Party');
  const repPokemon = nodecg.Replicant('Pokemon');
  const repRanking = nodecg.Replicant('Ranking');
  const repKP = nodecg.Replicant('KP');
  const repK2P = nodecg.Replicant('K2P');
  const repK3P = nodecg.Replicant('K3P');
  const repK4P = nodecg.Replicant('K4P');
  const repK5P = nodecg.Replicant('K5P');
  const repK6P = nodecg.Replicant('K6P');
  const repK2P_KPtop10 = nodecg.Replicant('K2P_KPtop10');

  const dbPath = './bundles/pokemon/src/db/tournament.db'; //rootからの相対パス
  const db = new Database(dbPath);
  const queryDataParty: PartyType = db
    .prepare(
      'SELECT id,accountID,player_name,pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6 FROM Party'
    )
    .all() as PartyType;

  const queryDataPokemon: PokemonType = db
    .prepare(
      'SELECT id,accountID,player_name,pokemon_name,type1,type2,teraType,ability,item,move1,move2,move3,move4 FROM Pokemon'
    )
    .all() as PokemonType;

  // PartyとPokemonのデータから、各パーティのポケモンのテラスタイプを引っ張ってきてひとつのデータにまとめる
  const result: MargePartyType = queryDataParty.map((list, i) => {
    const players = queryDataPokemon.filter((player) => player.accountID === list.accountID);
    return {
      id: i + 1,
      accountID: list.accountID,
      player_name: list.player_name,
      pokemon1: {
        name: list.pokemon1,
        teraType: players[0].teraType,
      },
      pokemon2: {
        name: list.pokemon2,
        teraType: players[1].teraType,
      },
      pokemon3: {
        name: list.pokemon3,
        teraType: players[2].teraType,
      },
      pokemon4: {
        name: list.pokemon4,
        teraType: players[3].teraType,
      },
      pokemon5: {
        name: list.pokemon5,
        teraType: players[4].teraType,
      },
      pokemon6: {
        name: list.pokemon6,
        teraType: players[5].teraType,
      },
    };
  });

  // KP情報を読み込む
  const queryDataKP: KPType = db.prepare('SELECT * FROM KP').all() as KPType;
  const queryDataK2P: KPType = db.prepare('SELECT * FROM K2P').all() as KPType;
  const queryDataK3P: KPType = db.prepare('SELECT * FROM K3P').all() as KPType;
  const queryDataK4P: KPType = db.prepare('SELECT * FROM K4P').all() as KPType;
  const queryDataK5P: KPType = db.prepare('SELECT * FROM K5P').all() as KPType;
  const queryDataK6P: KPType = db.prepare('SELECT * FROM K6P').all() as KPType;
  const queryDataK2P_KPtop10: KPType = db.prepare('SELECT * FROM K2P_KPtop10').all() as KPType;

  const queryDataRanking = db.prepare('SELECT * FROM Ranking').all() as queryRanking[];

  // Json形式でデータベースに保存したので、読み込む際もJsonとして読み込む
  const readJsonRanking: ConvertedRanking[] = queryDataRanking.map((value) => {
    // 文字列がバイナリで保存されているので、JSON.perseで元に戻す
    // console.log('value.move', value.move); ->
    // [{ "Rank": 1.0, "Name": "\u304b\u3048\u3093\u307b\u3046\u3057\u3083", "Score": 100.0 }, { "Rank": 1.0, "Name": "\u304b\u307f\u304f\u3060\u304f", "Score": 100.0 },...}]

    const itemRanking: RankingContents[] = JSON.parse(value.item);
    const abilityRanking: RankingContents[] = JSON.parse(value.ability);
    const teraTypeRanking: RankingContents[] = JSON.parse(value.teraType);
    const moveRanking: RankingContents[] = JSON.parse(value.move);

    return {
      id: value.id,
      pokemon: value.pokemon,
      item: itemRanking,
      ability: abilityRanking,
      teraType: teraTypeRanking,
      move: moveRanking,
    };
  });

  // console.log(readJsonRanking);

  repParty.value = result;
  repPokemon.value = queryDataPokemon;
  repRanking.value = readJsonRanking;
  repKP.value = queryDataKP;
  repK2P.value = queryDataK2P;
  repK3P.value = queryDataK3P;
  repK4P.value = queryDataK4P;
  repK5P.value = queryDataK5P;
  repK6P.value = queryDataK6P;
  repK2P_KPtop10.value = queryDataK2P_KPtop10;
};
