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

  const party = async (accountID: string) =>
    await tournamentDb.pokemon.findMany({
      where: { accountID },
      select: {
        pokemon_name: true,
        teraType: true,
      },
    });

  const getParty = async ({
    accountId,
    playerSide,
  }: {
    accountId: string;
    playerSide: PlayerSide;
  }) => {
    try {
      const partyData = await party(accountId);
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

          return [
            pokemonNum,
            {
              ...currentPokemon, // 現在の状態を保持
              name: partyData[i]?.pokemon_name ?? 'なし',
              teraType: (partyData[i]?.teraType
                ? translateType[partyData[i].teraType as TerastalType_JP]
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
