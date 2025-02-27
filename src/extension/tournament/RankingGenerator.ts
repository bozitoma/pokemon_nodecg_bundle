import { KPData, KPResult } from "../../types/ranking";

export class RankingGenerator {
  scores: Map<string[], number>;  // ポケモンの組み合わせと出現回数
  total: number;
  k: number;  // 何匹の組み合わせか（KP, K2P, ...）

  constructor(scores: Map<string[], number>, total: number, k: number) {
    this.scores = scores;
    this.total = total;
    this.k = k;
  }

  generate(): KPResult {
    // Map をエントリーの配列に変換
    const sortedRanking = Array.from(this.scores.entries())
      .map(([pokemons, score]) => ({
        combination: { pokemons },
        score,
        percentage: (score / this.total) * 100,
      }))
      .sort((a, b) => b.score - a.score);

    // ランキングデータを作成
    const ranking: KPData[] = [];
    let currentRank = 1;
    let previousScore: number | null = null;

    sortedRanking.forEach((entry, index) => {
      if (entry.score !== previousScore) {
        currentRank = index + 1;
      }

      ranking.push({
        id: index + 1,
        place: currentRank,
        combination: entry.combination,
        score: entry.score,
        percentage: entry.percentage,
      });

      previousScore = entry.score;
    });

    return {
      total: this.total,
      ranking,
    };
  }
}
