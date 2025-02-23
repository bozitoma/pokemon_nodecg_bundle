import type { NodeCG } from '../nodecg';
import { tournamentDb } from '../prisma';
import { Pokemon } from '../../../prisma/generated/tournament';

export const pokemonRanking = async (nodecg: NodeCG) => {
  const log = new nodecg.Logger('pokemonRanking'); // サーバー側にログを出す場合のコード
  const pokemonRankingRep = nodecg.Replicant('PokemonRanking');

  const pokemon = async () => {
    const result = await tournamentDb.pokemon.findMany({
      orderBy: {
        id: 'desc',
      },
    });
    return result;
  };
  const pokemonData = await pokemon();

  const calculateDuplicates = (pokemons: Pokemon[]) => {
    const grouped: { [key: string]: Pokemon[] } = {};

    // 1. pokemon_nameごとにまとめる
    pokemons.forEach((pokemon) => {
      if (pokemon.pokemon_name && !grouped[pokemon.pokemon_name]) {
        grouped[pokemon.pokemon_name] = [];
      }
      if (pokemon.pokemon_name) {
        grouped[pokemon.pokemon_name].push(pokemon);
      }
    });

    // 2. 重複数を計算
    const result: { [key: string]: any } = {};

    Object.keys(grouped).forEach((pokemonName) => {
      const pokemonGroup = grouped[pokemonName];
      const counts: { [key: string]: { [key: string]: number } } = {
        teraType: {},
        ability: {},
        item: {},
        moves: {},
      };

      // 重複数のカウント
      pokemonGroup.forEach((pokemon) => {
        if (pokemon.teraType) {
          counts.teraType[pokemon.teraType] = (counts.teraType[pokemon.teraType] || 0) + 1;
        }
        if (pokemon.ability) {
          counts.ability[pokemon.ability] = (counts.ability[pokemon.ability] || 0) + 1;
        }
        if (pokemon.item) {
          counts.item[pokemon.item] = (counts.item[pokemon.item] || 0) + 1;
        }

        // Movesはまとめてカウント
        const moves = [pokemon.move1, pokemon.move2, pokemon.move3, pokemon.move4];
        moves.forEach((move) => {
          if (move) {
            counts.moves[move] = (counts.moves[move] || 0) + 1;
          }
        });
      });

      result[pokemonName] = {
        total: pokemonGroup.length, // pokemon_nameの重複数
        ...counts,
      };
    });

    // 結果を配列に変換してソート
    const sortedResults = Object.entries(result)
      .map(([pokemonName, data]) => ({
        pokemonName,
        rank: 0, // 順位を初期化
        ...data,
      }))
      .sort((a, b) => b.total - a.total); // totalの降順でソート

    // 順位付け（同率順位に対応）
    let currentRank = 1;
    let previousTotal = sortedResults[0]?.total;

    sortedResults.forEach((item, index) => {
      if (item.total < previousTotal) {
        currentRank = index + 1;
      }
      item.rank = currentRank;
      previousTotal = item.total;
    });

    // オブジェクトに戻す
    return sortedResults.reduce((acc, item) => {
      const { pokemonName, ...rest } = item;
      acc[pokemonName] = rest;
      return acc;
    }, {} as { [key: string]: any });
  };
  log.info(calculateDuplicates(pokemonData));
  pokemonRankingRep.value = calculateDuplicates(pokemonData);
  log.info(`pokemonRankingの計算完了`);

  // const output = () => {
  //   // log.info(ranking);
  //   log.info(calculateDuplicates(pokemonData));
  // };
  // nodecg.listenFor('ranking', output);
};
