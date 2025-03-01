import type { NodeCG } from '../nodecg';
import { KPsCalculator } from '../tournament/KPsCalculator';

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
    log.info('予選通過者数:', topcutRep.value?.total);
    
    const topcutParties = topcutRep.value?.players
      ?.filter((player) => player.place <= (topcutRep.value?.total ?? 0))
      .map((player) => player.party) ?? [['なし', 'なし', 'なし', 'なし', 'なし', 'なし']];
    
    log.info('予選通過者のパーティ数:', topcutParties.length);
    log.info('予選通過パーティ一覧:', JSON.stringify(topcutParties, null, 2));
    
    // パーティデータの形式を確認
    log.info('パーティデータのサンプル:', {
      最初のパーティ: topcutParties[0],
      パーティの型: typeof topcutParties[0],
      ポケモンの例: topcutParties[0]?.[0],
    });

    const calculator = new KPsCalculator(topcutParties);

    // ランキングを生成
    KPs.forEach((KPRep, index) => {
      log.info(`------- ${KPRep.name}の計算開始 -------`);
      const result = calculator.calculateKPs(index + 1);
      
      // 計算過程のデバッグ
      log.info('計算過程:', {
        入力パーティ数: topcutParties.length,
        組み合わせ数: index + 1,
        生成された組み合わせ: result.ranking.length,
        最初の組み合わせ例: result.ranking[0]
      });

      KPRep.value = result;
      
      log.info(`${KPRep.name}の集計結果:`, {
        総パーティ数: result.total,
        ポケモン数: result.ranking.length,
        上位5件: result.ranking.slice(0, 5).map(r => ({
          ポケモン: r.combination.pokemons,
          出現数: r.score,
          採用率: r.percentage.toFixed(2) + '%'
        }))
      });
      
      log.info(`${KPRep.name}の計算完了`);
    });
  });
};
