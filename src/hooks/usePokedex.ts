import { useCallback } from 'react';
import { useReplicant } from './useReplicant';

export const usePokedex = () => {
  const [pokedexRep] = useReplicant('Pokedex');
  const getPokemonIcon = useCallback(
    (pokemonName: string) =>
      pokedexRep?.find((pokemon) => pokemon.name === pokemonName)?.img1 ?? '',
    [pokedexRep]
  );
  const getPokemonInfo = useCallback(
    (pokemonName: string) => {
      const pokemon = pokedexRep?.find((pokemon) => pokemon.name === pokemonName);
      if (pokemon) {
        return {
          name: pokemon.name,
          type: [pokemon.type1, pokemon.type2].filter((type) => type !== '' && type !== ' '), // TODO: なぜかスペースが入っているので削除、原因確かめる
          ability: [pokemon.ability1, pokemon.ability2, pokemon.ability3].filter(
            (ability) => ability !== ''
          ),
          BaseStats: [
            pokemon.bs_H,
            pokemon.bs_A,
            pokemon.bs_B,
            pokemon.bs_C,
            pokemon.bs_D,
            pokemon.bs_S,
          ],
        };
      } else {
        return {};
      }
    },
    [pokedexRep]
  );
  return { getPokemonIcon, getPokemonInfo };
};
