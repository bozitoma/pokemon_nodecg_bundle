import type { StatusAilment, TerastalType } from '../types/scoreboard';
import PSN from '../assets/PSN_icon.png';
import BRN from '../assets/BRN_icon.png';
import FRZ from '../assets/FRZ_icon.png';
import PAR from '../assets/PAR_icon.png';
import SLP from '../assets/SLP_icon.png';
import FTN from '../assets/FTN_icon.png';

import normal from '../assets/terastal_icon/icon_terastal_type_normal.png';
import fire from '../assets/terastal_icon/icon_terastal_type_fire.png';
import water from '../assets/terastal_icon/icon_terastal_type_water.png';
import grass from '../assets/terastal_icon/icon_terastal_type_grass.png';
import electric from '../assets/terastal_icon/icon_terastal_type_electric.png';
import ice from '../assets/terastal_icon/icon_terastal_type_ice.png';
import fighting from '../assets/terastal_icon/icon_terastal_type_fighting.png';
import poison from '../assets/terastal_icon/icon_terastal_type_poison.png';
import ground from '../assets/terastal_icon/icon_terastal_type_ground.png';
import flying from '../assets/terastal_icon/icon_terastal_type_flying.png';
import psychic from '../assets/terastal_icon/icon_terastal_type_psychic.png';
import bug from '../assets/terastal_icon/icon_terastal_type_bug.png';
import rock from '../assets/terastal_icon/icon_terastal_type_rock.png';
import ghost from '../assets/terastal_icon/icon_terastal_type_ghost.png';
import dragon from '../assets/terastal_icon/icon_terastal_type_dragon.png';
import dark from '../assets/terastal_icon/icon_terastal_type_dark.png';
import steel from '../assets/terastal_icon/icon_terastal_type_steel.png';
import fairy from '../assets/terastal_icon/icon_terastal_type_fairy.png';
import stellar from '../assets/terastal_icon/icon_terastal_type_stellar.png';

type Props = {
  PokemonIcon: string | undefined;
  BattleStatus: string | undefined;
  Terastallized?: boolean | undefined;
  StatusAilment?: StatusAilment;
  TerastalType?: TerastalType;
};

export function PokemonAvatarGraphics({
  PokemonIcon,
  BattleStatus,
  Terastallized,
  StatusAilment,
  TerastalType,
}: Props) {
  const StatusAilmentIcon = (Ailment: string | undefined) => {
    switch (Ailment) {
      case 'PSN':
        return PSN;
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
    <>
      <div className="pokemonIcons">
        <img className={`pokemonIcon ${BattleStatus}`} src={PokemonIcon} alt="" />
        <img
          className="statusAilment"
          src={StatusAilmentIcon(StatusAilment)}
          alt=""
          style={
            StatusAilment !== (undefined || '') && BattleStatus === 'active'
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
        />
        <img
          className="faintingIcon"
          src={FTN}
          alt=""
          style={BattleStatus === 'fainting' ? { visibility: 'visible' } : { visibility: 'hidden' }}
        />
        <img
          className="terastallized"
          src={TerastalTypeIcon(TerastalType)}
          alt=""
          style={
            BattleStatus !== 'benched' && Terastallized === true
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
        />
      </div>
    </>
  );
}
