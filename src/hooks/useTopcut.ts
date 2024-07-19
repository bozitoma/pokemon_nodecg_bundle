import { useRepList } from '../hooks/useRepList';
import { KPDefaultValues } from '../types/replicant';

export const useTopcut = () => {
  const { repKP } = useRepList();
  const KPdata = repKP ? repKP : [KPDefaultValues];

  const getKPscore = (name: string) => {
    console.log(name);

    const newName =
      name === 'ウーラオス（れんげきのかた）' || name === 'ウーラオス（いちげきのかた）'
        ? 'ウーラオス'
        : name;
    const pokemonName = KPdata.find((kp) => kp.pokemon === newName);
    const KPscore = pokemonName ? pokemonName.score : 0;

    return KPscore;
  };
  return {
    getKPscore,
  };
};
