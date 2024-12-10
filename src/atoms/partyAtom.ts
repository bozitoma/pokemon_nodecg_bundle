import { Atom, atom, PrimitiveAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { Party, PlayerSide, PokemonNum } from '../types/scoreboard';

// 引数オブジェクトの型
type Params = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const pokemonAtomFamily = atomFamily<Params, PrimitiveAtom<string>>(
  () => atom('なし'),
  (a, b) => a.playerSide === b.playerSide && a.pokemonNum === b.pokemonNum
);

export const partyAtomFamily = atomFamily<PlayerSide, Atom<Party>>(
  (playerSide) =>
    atom((get) => ({
      pokemon1: get(pokemonAtomFamily({ playerSide, pokemonNum: 'pokemon1' })),
      pokemon2: get(pokemonAtomFamily({ playerSide, pokemonNum: 'pokemon2' })),
      pokemon3: get(pokemonAtomFamily({ playerSide, pokemonNum: 'pokemon3' })),
      pokemon4: get(pokemonAtomFamily({ playerSide, pokemonNum: 'pokemon4' })),
      pokemon5: get(pokemonAtomFamily({ playerSide, pokemonNum: 'pokemon5' })),
      pokemon6: get(pokemonAtomFamily({ playerSide, pokemonNum: 'pokemon6' })),
    })),
  (a, b) => a === b
);

export const importPartyAtomFamily = atomFamily((playerSide: PlayerSide) =>
  atom(null, (_get, set, party: Party) => {
    set(pokemonAtomFamily({ playerSide, pokemonNum: 'pokemon1'}), party.pokemon1);
    set(pokemonAtomFamily({ playerSide, pokemonNum: 'pokemon2'}), party.pokemon2);
    set(pokemonAtomFamily({ playerSide, pokemonNum: 'pokemon3'}), party.pokemon3);
    set(pokemonAtomFamily({ playerSide, pokemonNum: 'pokemon4'}), party.pokemon4);
    set(pokemonAtomFamily({ playerSide, pokemonNum: 'pokemon5'}), party.pokemon5);
    set(pokemonAtomFamily({ playerSide, pokemonNum: 'pokemon6'}), party.pokemon6);
  })
);
