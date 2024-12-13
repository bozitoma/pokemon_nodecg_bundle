import { RankingData } from "../../types/ranking";

export class RankingGenerator {
  scores: Record<string, number>;
  total: number;

  constructor(scores: Record<string, number>, total: number) {
    this.scores = scores;
    this.total = total;
  }

  generate(): { total: number; ranking: RankingData[] } {
    // オブジェクトを配列に変換し、scoreで降順ソート
    const sortedRanking = Object.entries(this.scores)
      .map(([combination, score]) => ({
        combination,
        score,
        rate: ((score / this.total) * 100).toFixed(2), // rateを計算し小数点2桁に
      }))
      .sort((a, b) => b.score - a.score);

    // ランキングデータを作成
    const ranking: RankingData[] = [];
    let currentRank = 1; // 現在の順位
    let previousScore: number | null = null; // 直前のスコア

    sortedRanking.forEach((entry, index) => {
      // 同じスコアの場合、順位をスキップしない
      if (entry.score !== previousScore) {
        currentRank = index + 1; // 累計順位
      }

      ranking.push({
        id: index + 1, // sort用にIDを追加
        place: currentRank,
        combination: entry.combination,
        score: entry.score,
        rate: `${entry.rate}%`,
      });

      previousScore = entry.score;
    });

    return {
      total: this.total,
      ranking,
    };
  }
}
