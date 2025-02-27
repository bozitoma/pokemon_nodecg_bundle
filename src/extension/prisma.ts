import { PrismaClient as Pokedex } from '../../prisma/generated/pokedex';
import { PrismaClient as Tournament } from '../../prisma/generated/tournament';
import { join } from 'path';

// 現在のファイルからの相対パスで正しいDBファイルの場所を指定
const DB_PATH = join(__dirname, '../src/db');

export const pokedexDb = new Pokedex({
  datasources: { 
    db: { url: `file:${join(DB_PATH, 'pokedex.db')}` } 
  }
});

export const tournamentDb = new Tournament({
  datasources: { 
    db: { url: `file:${join(DB_PATH, 'tournament.db')}` } 
  }
});

// 接続テスト
pokedexDb.$connect()
  .then(() => console.log('Pokedex DB connected successfully'))
  .catch(e => console.error('Pokedex DB connection error:', e, DB_PATH));

// 接続テスト
tournamentDb.$connect()
  .then(() => console.log('Tournament DB connected successfully'))
  .catch(e => console.error('Tournament DB connection error:', e, DB_PATH));
