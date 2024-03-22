import { useReplicant } from './useReplicant';

export const useRepList = () => {
  const [repPokedex, setRepPokedex] = useReplicant('Pokedex'); // データベースからインポートする時のレプリカント
  const [repParty, setRepParty] = useReplicant('Party'); // データベースからインポートする時のレプリカント
  const [repPokemon, setRepPokemon] = useReplicant('Pokemon');
  const [repRanking, setRepRanking] = useReplicant('Ranking');
  const [repTimer, setRepTimer] = useReplicant('Timer');
  const [repKP, setRepKP] = useReplicant('KP');
  const [repK2P, setRepK2P] = useReplicant('K2P');
  const [repK3P, setRepK3P] = useReplicant('K3P');
  const [repK4P, setRepK4P] = useReplicant('K4P');
  const [repK5P, setRepK5P] = useReplicant('K5P');
  const [repK6P, setRepK6P] = useReplicant('K6P');
  const [repK2P_KPtop10, setRepK2P_KPtop10] = useReplicant('K2P_KPtop10');
  const [repBattleParty, setRepBattleParty] = useReplicant('BattleParty'); //グラフィックに反映する用のレプリカント
  const [repInformation, setRepInformation] = useReplicant('ScoreboardInfo');
  const [repCommentator, setRepCommentator] = useReplicant('Commentator');
  const [repBracket, setRepBracket] = useReplicant('Bracket');
  const [repTopcut, setRepTopcut] = useReplicant('Topcut');

  return {
    repPokedex,
    setRepPokedex,
    repParty,
    setRepParty,
    repPokemon,
    setRepPokemon,
    repRanking,
    setRepRanking,
    repTimer,
    setRepTimer,
    repKP,
    setRepKP,
    repK2P,
    setRepK2P,
    repK3P,
    setRepK3P,
    repK4P,
    setRepK4P,
    repK5P,
    setRepK5P,
    repK6P,
    setRepK6P,
    repK2P_KPtop10,
    setRepK2P_KPtop10,
    repBattleParty,
    setRepBattleParty,
    repInformation,
    setRepInformation,
    repCommentator,
    setRepCommentator,
    repBracket,
    setRepBracket,
    repTopcut,
    setRepTopcut,
  };
};
