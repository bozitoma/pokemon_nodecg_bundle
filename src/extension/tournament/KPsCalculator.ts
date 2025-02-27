import { RankingGenerator } from "./RankingGenerator";

export class KPsCalculator {
  private parties: any[]; // tournamentDb.party の型に応じて適切な型を指定

  constructor(parties: any[]) {
    this.parties = parties;
  }

  // k個のポケモンの組み合わせを生成
  private generateCombinations(pokemons: string[], k: number): string[][] {
    if (k === 1) return pokemons.map(p => [p]);
    const combinations: string[][] = [];
    
    for (let i = 0; i <= pokemons.length - k; i++) {
      const head = pokemons[i];
      const tailCombinations = this.generateCombinations(
        pokemons.slice(i + 1),
        k - 1
      );
      tailCombinations.forEach(tail => {
        combinations.push([head, ...tail]);
      });
    }
    
    return combinations;
  }

  calculateKPs(k: number) {
    const combinationCounts = new Map<string[], number>();

    this.parties.forEach(party => {
      const partyPokemons = [
        party.pokemon1,
        party.pokemon2,
        party.pokemon3,
        party.pokemon4,
        party.pokemon5,
        party.pokemon6,
      ].filter(p => p); // null/undefined を除外

      // k個のポケモンの組み合わせを生成してカウント
      const combinations = this.generateCombinations(partyPokemons, k);
      combinations.forEach(combo => {
        const sortedCombo = combo.sort(); // ポケモンの順序を統一
        const count = combinationCounts.get(sortedCombo) || 0;
        combinationCounts.set(sortedCombo, count + 1);
      });
    });

    const rankingGenerator = new RankingGenerator(
      combinationCounts,
      this.parties.length,
      k
    );
    
    return rankingGenerator.generate();
  }
} 