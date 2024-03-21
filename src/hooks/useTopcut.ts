import { useRepList } from '../hooks/useRepList';
import { KPDefaultValues } from '../types/replicant';

export const useTopcut = () => {
  const { repKP } = useRepList();
  const KPdata = repKP ? repKP : [KPDefaultValues];

  const getKPscore = (name: string) => {
    const pokemonName = KPdata.find((kp) => kp.pokemon === name);
    const KPscore = pokemonName ? pokemonName.score : 0;

    return KPscore;
  };
  return {
    getKPscore,
  };
};
