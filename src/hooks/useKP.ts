// import { useRepList } from '../hooks/useRepList';
// import { KPDefaultValues } from '../types/replicant';
import { PokemonNum } from '../types/scoreboard';
import { pokemonNumList } from '../utils/const';
import { useReplicant } from './useReplicant';
import { Party } from '../../prisma/generated/tournament';

export const useKP = () => {
  const [KPRep] = useReplicant('KP');
  const [partiesRep] = useReplicant('Parties');
  const [topcutRep] = useReplicant('Topcut');

  // プレイヤー名からパーティ番号を抽出する関数
  const extractPlayerInfo = (fullName: string) => {
    // プレイヤー名_パーティ番号 の形式かチェック
    const parts = fullName.split('_');
    if (parts.length === 2) {
      const playerName = parts[0];
      const partyNum = parseInt(parts[1], 10);
      return { playerName, partyNum: isNaN(partyNum) ? undefined : partyNum };
    }

    // 旧形式の場合はそのまま返す
    return { playerName: fullName, partyNum: undefined };
  };

  const getPartyKP = (fullName: string) => {
    if (!partiesRep || !fullName || fullName === 'なし') return 0;

    // プレイヤー名とパーティ番号を抽出
    const { playerName, partyNum } = extractPlayerInfo(fullName);

    // パーティを検索
    let partyInfo: Party | undefined = undefined;
    if (partyNum !== undefined) {
      partyInfo = [...partiesRep].find(party =>
        party.player_name === playerName && party.party_num === partyNum);
    } else {
      partyInfo = [...partiesRep].find(party => party.player_name === playerName);
    }

    if (!partyInfo) {
      console.warn(`パーティが見つかりません: ${fullName}`);
      return 0;
    }

    // KPを計算
    const party = pokemonNumList.map((key) => partyInfo?.[key as PokemonNum] ?? '');
    return party.reduce((acc, cur) => {
      if (!KPRep || !cur) return acc;
      const KP = KPRep.ranking.find((pokemon) => pokemon.combination.pokemons.includes(cur))?.score;
      if (!KP) return acc;
      return acc + KP;
    }, 0);
  };

  const getSortedTopcut = () => {
    if (!topcutRep) return null;
    const playersWithKP = topcutRep.players.map((player) => ({
      playerName: player.name ?? '',
      kpScore: getPartyKP(player.name ?? ''),
      party: player.party,
    }));

    console.log('プレイヤーのKPスコア:', playersWithKP);
    return playersWithKP.sort((a, b) => b.kpScore - a.kpScore);
  };

  const getHighestKPPlayer = () => {
    if (!partiesRep) return null;

    const playersWithKP = [...partiesRep].map((party) => ({
      playerName: party.player_name ?? '',
      kpScore: getPartyKP(party.player_name ?? ''),
      party: pokemonNumList.map((key) => party[key as PokemonNum] ?? ''),
    }));

    return playersWithKP.reduce((highest, current) => {
      return highest.kpScore > current.kpScore ? highest : current;
    }, playersWithKP[0]);
  };

  return { getHighestKPPlayer, getSortedTopcut };
};
