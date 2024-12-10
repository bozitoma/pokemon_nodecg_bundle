import { PrismaClient as Pokedex } from '@prisma/generated/pokedex';
import { PrismaClient as Tournament } from '@prisma/generated/tournament';

export const pokedexDb = new Pokedex({
  // @prisma/generated から見た相対パス
  datasources: { db: { url: 'file:../../src/db/pokedex.db' } },
});

export const tournamentDb = new Tournament({
  datasources: { db: { url: 'file:../../src/db/tournament.db' } },
});
