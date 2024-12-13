import { memo, useMemo } from 'react';
import { useReplicant } from '../../../hooks/useReplicant';
import { PlayerSide, PokemonNum, StatusAilment, TerastalType } from '../../../types/scoreboard';
import { battlePokemonDefaultValue } from '../../../utils/defaultValues/battlePokemon';
import FTN from '../../../assets/FTN_icon.png';
import { usePokedex } from '../../../hooks/usePokedex';

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
  const { getPokemonIcon } = usePokedex();
  const pokemon = useMemo(
    () => (battlePartyRep ? battlePartyRep[playerSide][pokemonNum] : battlePokemonDefaultValue),
    [battlePartyRep, playerSide, pokemonNum]
  );
  const pokemonIcon = useMemo(() => getPokemonIcon(pokemon.name), [pokemon.name]);
  const statusAilmentIcon = useMemo(
    () => getStatusAilmentIcon(pokemon.statusAilment),
    [pokemon.statusAilment]
  );
  const terastalTypeIcon = useMemo(() => getTerastalIcon(pokemon.teraType), [pokemon.teraType]);
  return (
    <div className="pokemonIcons">
      <img className={`pokemonIcon ${pokemon.battleState}`} src={pokemonIcon} alt="" />
      <img
        className="statusAilment"
        src={statusAilmentIcon}
        alt=""
        style={
          pokemon.statusAilment !== (undefined || 'なし') && pokemon.battleState === 'Active'
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
