import {
  Party,
  PlayerAtom,
  Pokemon,
  PokemonNum,
  Topcut,
  TopcutPlayerNum,
  TopcutPokemon,
} from './scoreboard';
import NoSelectIcon from '../assets/Monsterball_icon.png';

export const pokemonDefaultValue: Pokemon = {
  name: 'なし', //ポケモン名
  icon: NoSelectIcon,
  // type1: 'none', //タイプ1
  // type2: 'none', //タイプ2
  teraType: 'normal', //テラスタイプ
  // level: 50, //レベル
  // item: '', //持ち物
  // ability: '', //特性
  // nature: '', //性格
  // gender: 'none', //性別
  // move1: '', //わざ1
  // move2: '', //わざ2
  // move3: '', //わざ3
  // move4: '', //わざ4

  // 対戦
  battleState: 'Benched',
  statusAilment: 'なし', //状態異常
  terastallize: false, //テラスタルの使用を表す真偽値
  terastalButton: false, //テラスタルボタンを1体だけに適用するための真偽値
};

export const topcutPokemonDefaultValue: TopcutPokemon = {
  name: 'なし', //ポケモン名
  icon: NoSelectIcon,
  score: 0,
};

export const topcutDefaultValue: Topcut = {
  pokemon1: topcutPokemonDefaultValue,
  pokemon2: topcutPokemonDefaultValue,
  pokemon3: topcutPokemonDefaultValue,
  pokemon4: topcutPokemonDefaultValue,
  pokemon5: topcutPokemonDefaultValue,
  pokemon6: topcutPokemonDefaultValue,
  partyKP: 0,
};

export const playerAtomDefaultValue: PlayerAtom = {
  name: '',
  score: 0,
  swiss: {
    win: 0,
    lose: 0,
    draw: 0,
  },
  pokemon1: pokemonDefaultValue,
  pokemon2: pokemonDefaultValue,
  pokemon3: pokemonDefaultValue,
  pokemon4: pokemonDefaultValue,
  pokemon5: pokemonDefaultValue,
  pokemon6: pokemonDefaultValue,
};

export const partyDefaultValue: Party = {
  Player1: {
    pokemon1: pokemonDefaultValue,
    pokemon2: pokemonDefaultValue,
    pokemon3: pokemonDefaultValue,
    pokemon4: pokemonDefaultValue,
    pokemon5: pokemonDefaultValue,
    pokemon6: pokemonDefaultValue,
  },
  Player2: {
    pokemon1: pokemonDefaultValue,
    pokemon2: pokemonDefaultValue,
    pokemon3: pokemonDefaultValue,
    pokemon4: pokemonDefaultValue,
    pokemon5: pokemonDefaultValue,
    pokemon6: pokemonDefaultValue,
  },
};

export const pokemonNumList: PokemonNum[] = [
  'pokemon1',
  'pokemon2',
  'pokemon3',
  'pokemon4',
  'pokemon5',
  'pokemon6',
];

export const topcutPlayerNumList: TopcutPlayerNum[] = [
  'Player1',
  'Player2',
  'Player3',
  'Player4',
  'Player5',
  'Player6',
  'Player7',
  'Player8',
  'Player9',
  'Player10',
  'Player11',
  'Player12',
  'Player13',
  'Player14',
  'Player15',
  'Player16',
  'Player17',
  'Player18',
  'Player19',
  'Player20',
  'Player21',
  'Player22',
  'Player23',
  'Player24',
  'Player25',
  'Player26',
  'Player27',
  'Player28',
  'Player29',
  'Player30',
  'Player31',
  'Player32',
];
