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

    // ポケモンごとのKPスコアを計算して表示
    let totalKP = 0;
    const pokemonKPs = party.map(pokemon => {
      if (!KPRep || !pokemon) return { pokemon, kp: 0 };
      const kp = KPRep.ranking.find((p) => p.combination.pokemons.includes(pokemon))?.score ?? 0;
      totalKP += kp;
      return { pokemon, kp };
    });

    console.log(`プレイヤー「${fullName}」のKP詳細:`, {
      playerName,
      partyNum,
      party,
      pokemonKPs,
      totalKP
    });

    return totalKP;
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

    console.log('すべてのパーティデータ:', partiesRep);

    // すべてのパーティのKPスコアを計算
    const playersWithKP = [...partiesRep].map((party) => {
      const playerName = party.player_name ?? '';
      const partyNum = party.party_num;
      const fullName = partyNum ? `${playerName}_${partyNum}` : playerName;

      const partyPokemons = pokemonNumList.map((key) => party[key as PokemonNum] ?? '');

      // KPスコアを計算
      let totalKP = 0;
      const pokemonKPs = partyPokemons.map(pokemon => {
        if (!KPRep || !pokemon) return { pokemon, kp: 0 };
        const kp = KPRep.ranking.find((p) => p.combination.pokemons.includes(pokemon))?.score ?? 0;
        totalKP += kp;
        return { pokemon, kp };
      });

      return {
        playerName: fullName,
        kpScore: totalKP,
        party: partyPokemons,
        details: { pokemonKPs, totalKP }
      };
    });

    console.log('すべてのプレイヤーのKP詳細:', playersWithKP);

    // KPスコアで降順ソート
    const sortedPlayers = [...playersWithKP].sort((a, b) => b.kpScore - a.kpScore);
    console.log('KPソート後のプレイヤー:', sortedPlayers);

    // 最も高いKPスコアを持つプレイヤーを返す
    const highest = sortedPlayers[0];
    console.log('最高KPスコアプレイヤー:', highest);

    return highest;
  };

  return { getHighestKPPlayer, getSortedTopcut };
};
