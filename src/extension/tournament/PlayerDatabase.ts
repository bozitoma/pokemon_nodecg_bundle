import type { NodeCG } from '../nodecg';
import { PlayerSide, PokemonNum, TerastalType, TerastalType_JP } from '../../types/scoreboard';
import { tournamentDb } from '../prisma';

const translateType: { [key in TerastalType_JP]: TerastalType } = {
  ノーマル: 'normal',
  ほのお: 'fire',
  みず: 'water',
  くさ: 'grass',
  でんき: 'electric',
  こおり: 'ice',
  かくとう: 'fighting',
  どく: 'poison',
  じめん: 'ground',
  ひこう: 'flying',
  エスパー: 'psychic',
  むし: 'bug',
  いわ: 'rock',
  ゴースト: 'ghost',
  ドラゴン: 'dragon',
  あく: 'dark',
  はがね: 'steel',
  フェアリー: 'fairy',
  ステラ: 'stellar',
};

export const PlayerDatabase = async (nodecg: NodeCG) => {
  const log = new nodecg.Logger('PlayerDatabase');
  const battlePartyRep = nodecg.Replicant('BattleParty');

  // 選択したパーティに関連するポケモンを取得する関数
  const party = async (accountID: string, partyNum?: number) => {
    // partyNumが指定されている場合、特定のパーティ番号のポケモンのみを取得
    if (partyNum !== undefined) {
      // 特定のパーティ番号に紐づくパーティを取得
      const selectedParty = await tournamentDb.party.findFirst({
        where: {
          accountID,
          party_num: partyNum
        }
      });

      if (!selectedParty) {
        log.warn(`パーティが見つかりません: accountID=${accountID}, party_num=${partyNum}`);
        return [];
      }

      log.info(`パーティ情報を取得しました: ${JSON.stringify(selectedParty)}`);

      // 各ポケモンの情報を取得
      const pokemonPromises = [];
      if (selectedParty.pokemon1) pokemonPromises.push(tournamentDb.pokemon.findFirst({ where: { pokemon_name: selectedParty.pokemon1, accountID } }));
      if (selectedParty.pokemon2) pokemonPromises.push(tournamentDb.pokemon.findFirst({ where: { pokemon_name: selectedParty.pokemon2, accountID } }));
      if (selectedParty.pokemon3) pokemonPromises.push(tournamentDb.pokemon.findFirst({ where: { pokemon_name: selectedParty.pokemon3, accountID } }));
      if (selectedParty.pokemon4) pokemonPromises.push(tournamentDb.pokemon.findFirst({ where: { pokemon_name: selectedParty.pokemon4, accountID } }));
      if (selectedParty.pokemon5) pokemonPromises.push(tournamentDb.pokemon.findFirst({ where: { pokemon_name: selectedParty.pokemon5, accountID } }));
      if (selectedParty.pokemon6) pokemonPromises.push(tournamentDb.pokemon.findFirst({ where: { pokemon_name: selectedParty.pokemon6, accountID } }));

      const pokemonResults = await Promise.all(pokemonPromises);
      log.info(`取得したポケモン情報: ${JSON.stringify(pokemonResults)}`);

      return pokemonResults.filter(p => p !== null);
    } else {
      // 旧ロジック：全てのポケモンを取得（互換性のために残す）
      return await tournamentDb.pokemon.findMany({
        where: { accountID },
        select: {
          pokemon_name: true,
          teraType: true,
        },
      });
    }
  };

  const getParty = async ({
    accountId,
    playerSide,
    partyNum
  }: {
    accountId: string;
    playerSide: PlayerSide;
    partyNum?: number;
  }) => {
    try {
      log.info(`getParty called: accountId=${accountId}, playerSide=${playerSide}, partyNum=${partyNum}`);

      const partyData = await party(accountId, partyNum);
      if (!battlePartyRep.value || !partyData) {
        log.warn('battlePartyRep.value or partyData is undefined');
        return;
      }

      // 現在のバトルパーティの状態を保持
      const currentBattleParty = battlePartyRep.value[playerSide];

      // 新しいパーティデータを作成
      const updatedParty = Object.fromEntries(
        Array.from({ length: 6 }, (_, i) => {
          const pokemonNum = `pokemon${i + 1}` as PokemonNum;
          const currentPokemon = currentBattleParty[pokemonNum];
          const pokemon = partyData[i];

          return [
            pokemonNum,
            {
              ...currentPokemon, // 現在の状態を保持
              name: pokemon?.pokemon_name ?? 'なし',
              teraType: (pokemon?.teraType
                ? translateType[pokemon.teraType as TerastalType_JP]
                : 'normal') as TerastalType,
            },
          ];
        })
      );

      // バトルパーティを更新
      const newBattleParty = {
        ...battlePartyRep.value,
        [playerSide]: updatedParty,
      };

      log.info('Updating battle party:', newBattleParty);
      battlePartyRep.value = newBattleParty;

    } catch (error) {
      log.error('Error fetching party:', error);
      throw error;
    }
  };

  nodecg.listenFor('getParty', getParty);
};
