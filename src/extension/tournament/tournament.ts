import type { NodeCG } from '../nodecg';
import { tournamentDb } from '../prisma';

export const tournament = async (nodecg: NodeCG) => {
  const players = async () => {
    const result = await tournamentDb.player.findMany({
      // エントリー済みのプレイヤーを取得
      where: {
        status: 'エントリー済み',
      },
      orderBy: {
        id: 'desc',
      },
    });
    return result;
  };

  const playerData = await players();
  const playernRep = nodecg.Replicant('Player');
  playernRep.value = playerData;
};
