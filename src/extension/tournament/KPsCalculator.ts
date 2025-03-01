import { RankingGenerator } from "./RankingGenerator";
// import { Party } from "../../../prisma/generated/tournament";

export class KPsCalculator {
  private parties: string[][]; // パーティは文字列の配列の配列

  constructor(parties: string[][]) {
    this.parties = parties;
  }

  calculateKPs(k: number) {
    // Mapを使用して同じポケモン/組み合わせのカウントを合算
    const combinationMap = new Map<string[], number>();

    this.parties.forEach(party => {
      // partyは既に文字列の配列なので、直接使用可能
        const partyPokemons = party.filter(p => p && p !== 'なし'); // null/undefined/なし を除外1
      const combinations = this.generateCombinations(partyPokemons, k);
      
      combinations.forEach(combo => {
        const sortedCombo = [...combo].sort();
        const existing = Array.from(combinationMap.keys())
          .find(key => this.arraysEqual(key, sortedCombo));
        
        if (existing) {
          combinationMap.set(existing, (combinationMap.get(existing) || 0) + 1);
        } else {
          combinationMap.set(sortedCombo, 1);
        }
      });
    });

    // デバッグ用のログ追加
    console.log('Combinations generated:', {
      k,
      totalParties: this.parties.length,
      combinationsFound: combinationMap.size,
      firstCombination: Array.from(combinationMap.entries())[0]
    });

    const rankingGenerator = new RankingGenerator(
      combinationMap,
      this.parties.length,
      k
    );
    
    return rankingGenerator.generate();
  }

  private generateCombinations(pokemons: string[], k: number): string[][] {
    if (k === 1) return pokemons.map(p => [p]);
    if (k === 0 || pokemons.length < k) return [];
    
    return pokemons.reduce((acc: string[][], pokemon, index) => {
      const remainingPokemons = pokemons.slice(index + 1);
      const combinationsWithoutCurrent = this.generateCombinations(remainingPokemons, k - 1);
      
      const newCombinations = combinationsWithoutCurrent.map(combination => 
        [pokemon, ...combination]
      );
      
      return [...acc, ...newCombinations];
    }, []);
  }

  private arraysEqual(a: string[], b: string[]): boolean {
    return a.length === b.length && a.every((val, index) => val === b[index]);
  }
} 