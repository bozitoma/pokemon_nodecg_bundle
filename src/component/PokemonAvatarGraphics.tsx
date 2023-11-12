import type { StatusAilment } from '../types/scoreboard';
import PSN from '../assets/PSN_icon.png';
import BRN from '../assets/BRN_icon.png';
import FRZ from '../assets/FRZ_icon.png';
import PAR from '../assets/PAR_icon.png';
import SLP from '../assets/SLP_icon.png';
import FTN from '../assets/FTN_icon.png';

type Props = {
  PokemonIcon: string | undefined;
  BattleStatus: string | undefined;
  Terastallized: boolean | undefined;
  StatusAilment: StatusAilment;
};

export function PokemonAvatarGraphics({
  PokemonIcon,
  BattleStatus,
  Terastallized,
  StatusAilment,
}: Props) {
  function StatusAilmentIcon(Ailment: string | undefined) {
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
  }
  const TerastallizedIcon =
    'https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_01.png';

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
          src={TerastallizedIcon}
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
