import type { NodeCG } from '../nodecg';
import { tournamentDb } from '../prisma';
import { Party, Pokemon } from '@prisma/generated/tournament';
import { CombinationCounter } from './CombinationCounter';
import { RankingGenerator } from './RankingGenerator';

export const tournament = async (nodecg: NodeCG) => {
  const log = new nodecg.Logger('tournament'); // サーバー側にログを出す場合のコード

  const parties = async () => {
    const result = await tournamentDb.party.findMany({
      orderBy: {
        id: 'desc',
      },
    });
    return result;
  };

  // レスポンスをネスト配列に変換する関数
  const extractNestedPartyData = async (parties: Party[]): Promise<string[][]> => {
    // 各partyからpokemon1～6を抽出し、ネスト配列を作成
    const nestedParties = parties.map((party) => {
      return [
        party.pokemon1,
        party.pokemon2,
        party.pokemon3,
        party.pokemon4,
        party.pokemon5,
        party.pokemon6,
      ].filter((pokemon) => pokemon !== null) as string[]; // nullを除外して型をstring[]に
    });

    return nestedParties;
  };

  // パーティデータを取得
  const partyData = await parties();
  const partiesRep = nodecg.Replicant('Parties');
  partiesRep.value = partyData;

  // インスタンス化して組み合わせをカウント
  const nestedParties = await extractNestedPartyData(partyData);
  const combinationCounter = new CombinationCounter(nestedParties);
  const combinationCounts = combinationCounter.countOccurrences(2); // 2要素の組み合わせをカウント

  // ランキングを生成
  const totalCombinations = nestedParties.length; // パーティ数をトータルに設定
  const rankingGenerator = new RankingGenerator(combinationCounts, totalCombinations);
  const ranking = rankingGenerator.generate();

  // const repRanking = nodecg.Replicant('Ranking', {
  //   defaultValue: ranking,
  // });

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

    return result;
  };

  const players = async () => {
    const result = await tournamentDb.player.findMany({
      // エントリー済みのプレイヤーを取得
      where: {
        status: 'エントリー済み',
      },
      orderBy: {
        id: 'desc',
      },
    });
    return result;
  };

  const playerData = await players();
  const playernRep = nodecg.Replicant('Player');
  playernRep.value = playerData;

  const output = () => {
    log.info(ranking);
    log.info(calculateDuplicates(pokemonData));
  };
  nodecg.listenFor('ranking', output);
};
