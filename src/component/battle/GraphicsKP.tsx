import PSN from '../../assets/PSN_icon.png';
import BPSN from '../../assets/BPSN_icon.png';
import BRN from '../../assets/BRN_icon.png';
import FRZ from '../../assets/FRZ_icon.png';
import PAR from '../../assets/PAR_icon.png';
import SLP from '../../assets/SLP_icon.png';
import FTN from '../../assets/FTN_icon.png';

import normal from '../../assets/terastal_icon/icon_terastal_type_normal.png';
import fire from '../../assets/terastal_icon/icon_terastal_type_fire.png';
import water from '../../assets/terastal_icon/icon_terastal_type_water.png';
import grass from '../../assets/terastal_icon/icon_terastal_type_grass.png';
import electric from '../../assets/terastal_icon/icon_terastal_type_electric.png';
import ice from '../../assets/terastal_icon/icon_terastal_type_ice.png';
import fighting from '../../assets/terastal_icon/icon_terastal_type_fighting.png';
import poison from '../../assets/terastal_icon/icon_terastal_type_poison.png';
import ground from '../../assets/terastal_icon/icon_terastal_type_ground.png';
import flying from '../../assets/terastal_icon/icon_terastal_type_flying.png';
import psychic from '../../assets/terastal_icon/icon_terastal_type_psychic.png';
import bug from '../../assets/terastal_icon/icon_terastal_type_bug.png';
import rock from '../../assets/terastal_icon/icon_terastal_type_rock.png';
import ghost from '../../assets/terastal_icon/icon_terastal_type_ghost.png';
import dragon from '../../assets/terastal_icon/icon_terastal_type_dragon.png';
import dark from '../../assets/terastal_icon/icon_terastal_type_dark.png';
import steel from '../../assets/terastal_icon/icon_terastal_type_steel.png';
import fairy from '../../assets/terastal_icon/icon_terastal_type_fairy.png';
import stellar from '../../assets/terastal_icon/icon_terastal_type_stellar.png';

import { PlayerNum, PokemonNum } from '../../types/scoreboard';
import { useRepList } from '../../hooks/useRepList';

type Props = {
  player: PlayerNum;
  pokemonNum: PokemonNum;
};

export function GraphicsPokemonAvatar({ player, pokemonNum }: Props) {
  const { repBattleParty } = useRepList();

  // 三項演算子でundefindを排除
  const pokemonIcon = repBattleParty ? repBattleParty[player][pokemonNum].icon : '';
  const battleState = repBattleParty ? repBattleParty[player][pokemonNum].battleState : '';
  const terastallize = repBattleParty ? repBattleParty[player][pokemonNum].terastallize : '';
  const statusAilment = repBattleParty ? repBattleParty[player][pokemonNum].statusAilment : '';
  const terastalType = repBattleParty ? repBattleParty[player][pokemonNum].teraType : '';

  const StatusAilmentIcon = (Ailment: string | undefined) => {
    switch (Ailment) {
      case 'PSN':
        return PSN;
      case 'BPSN':
        return BPSN;
      case 'BRN':
        return BRN;
      case 'FRZ':
        return FRZ;
      case 'PAR':
        return PAR;
      case 'SLP':
        return SLP;
      default:
        return;
    }
  };

  const TerastalTypeIcon = (TerastalType: string | undefined) => {
    switch (TerastalType) {
      case 'normal':
        return normal;
      case 'fire':
        return fire;
      case 'water':
        return water;
      case 'grass':
        return grass;
      case 'electric':
        return electric;
      case 'ice':
        return ice;
      case 'fighting':
        return fighting;
      case 'poison':
        return poison;
      case 'ground':
        return ground;
      case 'flying':
        return flying;
      case 'psychic':
        return psychic;
      case 'bug':
        return bug;
      case 'rock':
        return rock;
      case 'ghost':
        return ghost;
      case 'dragon':
        return dragon;
      case 'dark':
        return dark;
      case 'steel':
        return steel;
      case 'fairy':
        return fairy;
      case 'stellar':
        return stellar;
      default:
        return;
    }
  };

  return (
    <div className="pokemonIcons">
      <img className={`pokemonIcon ${battleState}`} src={pokemonIcon} alt="" />
      <img
        className="statusAilment"
        src={StatusAilmentIcon(statusAilment)}
        alt=""
        style={
          statusAilment !== (undefined || 'なし') && battleState === 'Active'
            ? { visibility: 'visible' }
            : { visibility: 'hidden' }
        }
      />
      <img
        className="statusAilment"
        src={FTN}
        alt=""
        style={battleState === 'Fainting' ? { visibility: 'visible' } : { visibility: 'hidden' }}
      />
      <img
        className="terastallized"
        src={TerastalTypeIcon(terastalType)}
        alt=""
        style={
          battleState !== 'Benched' && terastallize === true
            ? { visibility: 'visible' }
            : { visibility: 'hidden' }
        }
      />
    </div>
  );
}
