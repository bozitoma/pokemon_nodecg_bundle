import type { NodeCG } from './nodecg';
import { pokemon } from '@prisma/generated/pokedex';
import { pokedexDb } from './prisma';

export const pokedex = async (nodecg: NodeCG) => {
  const pokedexRep = nodecg.Replicant('Pokedex');
  const getPokedex = async () => {
    const result: pokemon[] = await pokedexDb.pokemon.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    return result;
  };
  const pokedexData = await getPokedex();
  pokedexRep.value = pokedexData;
};
