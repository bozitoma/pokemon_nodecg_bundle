import { timer } from './timer';
import type { NodeCG } from './nodecg';
import { pokedex } from './pokedex';
import { tournament } from './tournament';
import { PlayerDatabase } from './tournament/PlayerDatabase';
import { KPs } from './KPs';
import { pokemonRanking } from './PokemonRanking';
import { topcutKPs } from './TopcutKPs';

export default (nodecg: NodeCG) => {
  // サーバー側にログを出す場合のコード
  // const log = new nodecg.Logger('pokedex');
  // log.info(repPokedex.value);


  PlayerDatabase(nodecg);
  tournament(nodecg);
  pokedex(nodecg)
  timer(nodecg);
  KPs(nodecg);
  pokemonRanking(nodecg);
  topcutKPs(nodecg);
};
