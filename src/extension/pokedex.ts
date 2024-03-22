import NodeCG from '@nodecg/types';
import Database from 'better-sqlite3';
import { Pokedex } from '../types/replicant';

type PokedexType = readonly Pokedex[];

export const pokedex = (nodecg: NodeCG.ServerAPI) => {
  const repPokedex = nodecg.Replicant('Pokedex');

  // // サーバー側にログを出す場合のコード
  // const log = new nodecg.Logger('partyLog');
  // log.info(repPokedex.value);

  const dbPath = './bundles/pokemon/src/db/Pokedex.db'; //rootからの相対パス
  const db = new Database(dbPath);
  const queryDataPokedex: PokedexType = db.prepare('SELECT * FROM pokemon').all() as PokedexType;

  repPokedex.value = queryDataPokedex;
};
