import { memo, useEffect, useMemo, useState } from 'react';
import { useReplicant } from '../../../hooks/useReplicant';
import { PlayerSide, PokemonNum, StatusAilment, TerastalType } from '../../../types/scoreboard';
import { battlePokemonDefaultValue } from '../../../utils/defaultValues/battlePokemon';
import FTN from '../../../assets/FTN_icon.png';

const getTerastalIcon = (fileName: TerastalType): string => {
  return new URL(`../../../assets/terastal_icon/icon_terastal_type_${fileName}.png`, import.meta.url)
    .href;
};

const getStatusAilmentIcon = (fileName: StatusAilment): string => {
    return new URL(`../../../assets/StatusAilment/${fileName}.png`, import.meta.url).href;
};

type Props = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const PokemonAvatarGraphics = memo(({ playerSide, pokemonNum }: Props) => {
  const [battlePartyRep] = useReplicant('BattleParty');
  const [pokedexRep] = useReplicant('Pokedex');
  const [pokemonIconUrl, setPokemonIconUrl] = useState<string>('');

  const pokemon = useMemo(
    () => (battlePartyRep ? battlePartyRep[playerSide][pokemonNum] : battlePokemonDefaultValue),
    [battlePartyRep, playerSide, pokemonNum]
  );

  // ポケモンの名前とPokedexデータが変わったときにアイコンURLを更新
  useEffect(() => {
    if (pokedexRep && pokemon && pokemon.name) {
      const foundPokemon = pokedexRep.find((p) => p.name === pokemon.name);
      console.log('Pokemon Name:', pokemon.name);
      console.log('Found Pokemon in Pokedex:', foundPokemon);
      setPokemonIconUrl(foundPokemon?.img1 ?? '');
    }
  }, [pokedexRep, pokemon.name]);

  const statusAilmentIcon = useMemo(
    () => getStatusAilmentIcon(pokemon.statusAilment),
    [pokemon.statusAilment]
  );
  const terastalTypeIcon = useMemo(() => getTerastalIcon(pokemon.teraType), [pokemon.teraType]);

  console.log('Pokemon Icon URL:', pokemonIconUrl);

  return (
    <div className="pokemonIcons">
      <img className={`pokemonIcon ${pokemon.battleState}`} src={pokemonIconUrl} alt="" />
      <img
        className="statusAilment"
        src={statusAilmentIcon}
        alt=""
        style={
          (pokemon.statusAilment !== undefined && pokemon.statusAilment !== 'なし' && pokemon.battleState === 'Active')
            ? { visibility: 'visible' }
            : { visibility: 'hidden' }
        }
      />
      <img
        className="statusAilment"
        src={FTN}
        alt=""
        style={
          pokemon.battleState === 'Fainting' ? { visibility: 'visible' } : { visibility: 'hidden' }
        }
      />
      <img
        className="terastallized"
        src={terastalTypeIcon}
        alt=""
        style={
          pokemon.battleState !== 'Benched' && pokemon.terastallize === true
            ? { visibility: 'visible' }
            : { visibility: 'hidden' }
        }
      />
    </div>
  );
});
