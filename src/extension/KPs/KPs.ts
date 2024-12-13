import type { NodeCG } from '../nodecg';
import { tournamentDb } from '../prisma';
import { Party } from '@prisma/generated/tournament';
import { CombinationCounter } from '../tournament/CombinationCounter';
import { RankingGenerator } from '../tournament/RankingGenerator';

export const KPs = async (nodecg: NodeCG) => {
  const log = new nodecg.Logger('KPs'); // サーバー側にログを出す場合のコード
  const KPRep = nodecg.Replicant('KP');
  const K2PRep = nodecg.Replicant('K2P');
  const K3PRep = nodecg.Replicant('K3P');
  const K4PRep = nodecg.Replicant('K4P');
  const K5PRep = nodecg.Replicant('K5P');
  const K6PRep = nodecg.Replicant('K6P');
  const KPs = [KPRep, K2PRep, K3PRep, K4PRep, K5PRep, K6PRep];

  /**
   * KP計算
   */
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

  // ランキングを生成
  KPs.forEach((KPRep, index) => {
    log.info(`${KPRep.name}のKP計算中...`);
    const combinationCounts = combinationCounter.countOccurrences(index + 1); // 2要素の組み合わせをカウント
    const totalCombinations = nestedParties.length; // パーティ数をトータルに設定
    const rankingGenerator = new RankingGenerator(combinationCounts, totalCombinations);
    const ranking = rankingGenerator.generate();
    KPRep.value = ranking;
    log.info(`${KPRep.name}のKP計算完了`);
  });
};

