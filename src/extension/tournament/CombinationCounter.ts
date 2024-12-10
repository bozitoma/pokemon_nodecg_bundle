/**
 * ポケモンの組み合わせパターンを出力する
 */
export class CombinationCounter {
  partys: string[][];

  constructor(partys: string[][]) {
    this.partys = partys;
  }

  // 指定サイズの組み合わせを生成する再帰関数
  private getCombinations(
    array: string[],
    size: number,
    start: number = 0,
    current: string[] = [],
    result: string[][] = []
  ): string[][] {
    if (current.length === size) {
      result.push([...current]);
      return result;
    }
    for (let i = start; i < array.length; i++) {
      current.push(array[i]);
      this.getCombinations(array, size, i + 1, current, result);
      current.pop();
    }
    return result;
  }

  // 組み合わせの出現回数を計算
  countOccurrences(combinationSize: number): Record<string, number> {
    const combinationCounts: Record<string, number> = {};

    this.partys.forEach((array) => {
      const combinations = this.getCombinations(array, combinationSize);
      combinations.forEach((combination) => {
        // 要素をソートして名前を一意にする
        const sortedCombination = combination.sort();
        const combinationName = sortedCombination.join(' × ');

        // 出現回数をカウント
        if (combinationCounts[combinationName]) {
          combinationCounts[combinationName]++;
        } else {
          combinationCounts[combinationName] = 1;
        }
      });
    });

    return combinationCounts;
  }
}
