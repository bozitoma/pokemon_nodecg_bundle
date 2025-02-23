import type { NodeCG } from '../nodecg';
import { CombinationCounter } from '../tournament/CombinationCounter';
import { RankingGenerator } from '../tournament/RankingGenerator';

export const topcutKPs = async (nodecg: NodeCG) => {
  const log = new nodecg.Logger('TopcutKPs'); // サーバー側にログを出す場合のコード
  const KPRep = nodecg.Replicant('Topcut_KP');
  const K2PRep = nodecg.Replicant('Topcut_K2P');
  const K3PRep = nodecg.Replicant('Topcut_K3P');
  const K4PRep = nodecg.Replicant('Topcut_K4P');
  const K5PRep = nodecg.Replicant('Topcut_K5P');
  const K6PRep = nodecg.Replicant('Topcut_K6P');
  const KPs = [KPRep, K2PRep, K3PRep, K4PRep, K5PRep, K6PRep];

  nodecg.listenFor('calcTopcutKPs', () => {
    const topcutRep = nodecg.Replicant('Topcut');

    const topcutParties = topcutRep.value?.players
      ?.filter((player) => player.place <= (topcutRep.value?.total ?? 0))
      .map((player) => player.party) ?? [['なし', 'なし', 'なし', 'なし', 'なし', 'なし']];
    const combinationCounter = new CombinationCounter(topcutParties);

    // ランキングを生成
    KPs.forEach((KPRep, index) => {
      log.info(`${KPRep.name}のTopcutKP計算中...`);
      const combinationCounts = combinationCounter.countOccurrences(index + 1); // 2要素の組み合わせをカウント
      const totalCombinations = topcutParties.length; // パーティ数をトータルに設定
      const rankingGenerator = new RankingGenerator(combinationCounts, totalCombinations);
      const ranking = rankingGenerator.generate();
      KPRep.value = ranking;
      log.info(`${KPRep.name}のTopcutKP計算完了`);
    });
  });
};
