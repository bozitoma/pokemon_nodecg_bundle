import { ReplicantMap } from '../../types/replicant';
import { battlePokemonDefaultValue } from './battlePokemon';
import { playerInfoDefaultValues } from './playerInfo';

// Replicantsの初期値を定義
export const replicantDefaultValues: ReplicantMap = {
  Pokedex: [],
  Player: [],
  Topcut: {
    total: 16,
    players: Array.from({ length: 16 }, (_, i) => ({
      place: i + 1,
      name: 'name',
      party: ['なし', 'なし', 'なし', 'なし', 'なし', 'なし'],
    })),
  },
  Parties: [
    {
      id: 1,
      accountID: '1',
      player_name: 'name',
      pokemon1: 'なし',
      pokemon2: 'なし',
      pokemon3: 'なし',
      pokemon4: 'なし',
      pokemon5: 'なし',
      pokemon6: 'なし',
    },
  ],
  Pokemon: [],
  Ranking: {
    total: 0,
    ranking: {},
  },
  Timer: {
    min: 20,
    sec: 0,
    isRunning: false,
  },
  SelectTime: {
    min: 20,
    sec: 0,
  },
  Scoreboard: {
    Round: 'Round',
    BestOf: 'Best of 1',
    Player1: playerInfoDefaultValues,
    Player2: playerInfoDefaultValues,
  },
  BattleParty: {
    Player1: {
      pokemon1: battlePokemonDefaultValue,
      pokemon2: battlePokemonDefaultValue,
      pokemon3: battlePokemonDefaultValue,
      pokemon4: battlePokemonDefaultValue,
      pokemon5: battlePokemonDefaultValue,
      pokemon6: battlePokemonDefaultValue,
    },
    Player2: {
      pokemon1: battlePokemonDefaultValue,
      pokemon2: battlePokemonDefaultValue,
      pokemon3: battlePokemonDefaultValue,
      pokemon4: battlePokemonDefaultValue,
      pokemon5: battlePokemonDefaultValue,
      pokemon6: battlePokemonDefaultValue,
    },
  },
};
