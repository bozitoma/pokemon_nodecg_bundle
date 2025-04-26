import { timer } from './timer';
import type { NodeCG } from './nodecg';
import { pokedex } from './pokedex';
import { tournament } from './tournament';
import { PlayerDatabase } from './tournament/PlayerDatabase';
import { KPs } from './KPs';
import { pokemonRanking } from './PokemonRanking';
import { topcutKPs } from './TopcutKPs';
import { LegendaryRanking } from './LegendaryRanking';
import { replicantDefaultValues } from '../utils/defaultValues/replicat';

export default (nodecg: NodeCG) => {
  // サーバー側にログを出す場合のコード
  const log = new nodecg.Logger('extension');
  log.info('NodeCG Pokemon extension starting...');

  // 主要Replicantの初期化
  initializeReplicants(nodecg);

  // 各モジュールの初期化
  PlayerDatabase(nodecg);
  tournament(nodecg);
  pokedex(nodecg);
  timer(nodecg);
  KPs(nodecg);
  pokemonRanking(nodecg);
  topcutKPs(nodecg);
  LegendaryRanking(nodecg);

  log.info('All modules initialized');
};

// 重要なReplicantを初期化する関数
function initializeReplicants(nodecg: NodeCG) {
  const log = new nodecg.Logger('replicants');

  // BattlePartyの初期化
  nodecg.Replicant('BattleParty', {
    defaultValue: replicantDefaultValues.BattleParty
  });

  // Scoreboardの初期化
  nodecg.Replicant('Scoreboard', {
    defaultValue: replicantDefaultValues.Scoreboard
  });

  // Topcutの初期化
  nodecg.Replicant('Topcut', {
    defaultValue: replicantDefaultValues.Topcut
  });

  // Partiesの初期化
  nodecg.Replicant('Parties', {
    defaultValue: replicantDefaultValues.Parties
  });

  log.info('All critical Replicants initialized');
}
