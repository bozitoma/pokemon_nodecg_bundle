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
  const log = new nodecg.Logger('PlayerDatabase'); // サーバー側にログを出す場合のコード

  // const partiesRep = nodecg.Replicant('Parties');
  const battlePartyRep = nodecg.Replicant('BattleParty');

  // const players = async () => {
  //   const result = await tournamentDb.player.findMany({
  //     // エントリー済みのプレイヤーを取得
  //     where: {
  //       status: 'エントリー済み',
  //     },
  //     orderBy: {
  //       id: 'desc',
  //     },
  //   });
  //   return result;
  // };
  // const playerData = await players();
  // log.info(playerData);
  // const playernRep = nodecg.Replicant('Player');
  // playernRep.value = playerData;
  // log.info('imported playerData');

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
      if (!(battlePartyRep.value && partyData)) return;

      const newData = {
        ...battlePartyRep.value[playerSide],
        ...Array.from({ length: 6 }, (_, i) => ({
          [`pokemon${i + 1}` as PokemonNum]: {
            ...battlePartyRep.value?.[playerSide][`pokemon${i + 1}` as PokemonNum],
            name: partyData[i]?.pokemon_name ?? 'なし',
            teraType: (partyData[i]?.teraType
              ? translateType[partyData[i]?.teraType as TerastalType_JP]
              : 'normal') as TerastalType,
          },
        })).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
      };
      log.info('newData', newData);
      battlePartyRep.value = { ...battlePartyRep.value, [playerSide]: newData };

      log.info('imported party', battlePartyRep.value?.[playerSide]);
    } catch (error) {
      log.error('Error fetching party:', error);
      throw error;
    }
  };
  nodecg.listenFor('getParty', getParty);
};
