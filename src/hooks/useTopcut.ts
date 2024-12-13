// import { useRepList } from '../hooks/useRepList';
// import { KPDefaultValues } from '../types/replicant';
// import { useReplicant } from './useReplicant';

// export const useTopcut = () => {
//   const [topcutRep] = useReplicant('Topcut');
//   const [KPRep] = useReplicant('KP');
//   const getKPscore = (name: string) => {
//     const newName =
//       name === 'ウーラオス（れんげきのかた）' || name === 'ウーラオス（いちげきのかた）'
//         ? 'ウーラオス'
//         : name;
//     const pokemonName = KPdata.find((kp) => kp.pokemon === newName);
//     const KPscore = pokemonName ? pokemonName.score : 0;

//     return KPscore;
//   };
//   return { getKPscore };
// };
