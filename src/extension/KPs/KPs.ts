import type { NodeCG } from '../nodecg';
import { tournamentDb } from '../prisma';
import { KPsCalculator } from '../tournament/KPsCalculator';

export const KPs = async (nodecg: NodeCG) => {
  const log = new nodecg.Logger('KPs'); // サーバー側にログを出す場合のコード

  // KPのレプリカントを取得
  const KPRep = nodecg.Replicant('KP');
  const K2PRep = nodecg.Replicant('K2P');
  const K3PRep = nodecg.Replicant('K3P');
  const K4PRep = nodecg.Replicant('K4P');
  const K5PRep = nodecg.Replicant('K5P');
  const K6PRep = nodecg.Replicant('K6P');
  const KPs = [KPRep, K2PRep, K3PRep, K4PRep, K5PRep, K6PRep];

  const partiesRep = nodecg.Replicant('Parties');

  /**
   * パーティデータを取得
   */
  const getParties = async () => {
    const result = await tournamentDb.party.findMany({
      orderBy: {
        id: 'desc',
      },
    });
    partiesRep.value = result;
    return result;
  };
  const parties = await getParties();

  // KP計算
  const partyArrays = parties.map(party => [
    party.pokemon1,
    party.pokemon2,
    party.pokemon3,
    party.pokemon4,
    party.pokemon5,
    party.pokemon6
  ].filter((p): p is string => p !== null));
  
  const calculator = new KPsCalculator(partyArrays);

  // ランキングを生成
  KPs.forEach((KPRep, index) => {
    log.info(`${KPRep.name}のKP計算中...`);
    KPRep.value = calculator.calculateKPs(index + 1); // 2要素の組み合わせをカウント
    log.info(`${KPRep.name}のKP計算完了`);
  });
};

