import type { NodeCG } from '../nodecg';
import { LegendaryPokemon } from '../../utils/LegendaryPokemon';

export const LegendaryRanking = async (nodecg: NodeCG) => {
  const log = new nodecg.Logger('LegendaryRanking');
  const KPRep = nodecg.Replicant('KP').value;
  const K2PRep = nodecg.Replicant('K2P').value;
  const legendaryRankingRep = nodecg.Replicant('LegendaryRanking');

  // データが未定義の場合は早期リターン
  if (!KPRep?.ranking || !K2PRep?.ranking) {
    log.warn('KP or K2P data is not available');
    return;
  }

  // 伝説のポケモンの単体採用率を計算（KPから取得）
  // Mapを使用して重複を排除
  const legendaryMap = new Map<string, { percentage: number; count: number }>();
  
  KPRep.ranking
    .filter(entry => LegendaryPokemon.includes(entry.combination.pokemons[0]))
    .forEach(entry => {
      const pokemon = entry.combination.pokemons[0];
      const existing = legendaryMap.get(pokemon);
      
      if (existing) {
        legendaryMap.set(pokemon, {
          percentage: existing.percentage + entry.percentage,
          count: existing.count + entry.score
        });
      } else {
        legendaryMap.set(pokemon, {
          percentage: entry.percentage,
          count: entry.score
        });
      }
    });

  // Mapから配列に変換してソート
  const legendaryRanking = Array.from(legendaryMap.entries())
    .map(([pokemon, data]) => ({
      pokemon,
      percentage: data.percentage,
      count: data.count
    }))
    .sort((a, b) => b.percentage - a.percentage);

  // ソート済みの伝説ポケモンリストを作成
  const sortedLegendaryPokemon = legendaryRanking.map(l => l.pokemon);

  // 伝説のポケモンの組み合わせランキングを計算（K2Pから取得）
  // ソートされた順序に合わせて組み合わせを生成
  const combinationRanking = sortedLegendaryPokemon.map(legendary => {
    // 組み合わせを一時的に格納するMap
    const combinationsMap = new Map<string, { count: number; percentage: number }>();

    // 該当する伝説ポケモンとの組み合わせを全て取得
    K2PRep.ranking
      .filter(entry => entry.combination.pokemons.includes(legendary))
      .forEach(entry => {
        const partner = entry.combination.pokemons.find(p => p !== legendary) || '';
        
        // 既存のデータがあれば合算、なければ新規作成
        const existing = combinationsMap.get(partner);
        if (existing) {
          combinationsMap.set(partner, {
            count: existing.count + entry.score,
            percentage: existing.percentage + entry.percentage
          });
        } else {
          combinationsMap.set(partner, {
            count: entry.score,
            percentage: entry.percentage
          });
        }
      });

    // Mapからソート済みの配列に変換
    const combinations = Array.from(combinationsMap.entries())
      .map(([pokemon, data]) => ({
        pokemon,
        percentage: data.percentage,
        count: data.count
      }))
      .sort((a, b) => b.percentage - a.percentage);

    return {
      legendary,
      combinations: combinations || []
    };
  });

  // 結果を表示
  // log.info('Legendary Pokemon Ranking:', JSON.stringify(legendaryRanking, null, 2));
  // log.info('Combination Rankings:', JSON.stringify(combinationRanking, null, 2));

  // Replicantに保存
  legendaryRankingRep.value = {
    total: KPRep?.total || 0,
    legendaryRanking: legendaryRanking || [],
    combinationRanking: combinationRanking || []
  };
};
