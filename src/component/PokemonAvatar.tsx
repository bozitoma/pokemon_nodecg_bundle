import { useEffect } from 'react';
import { Avatar, Badge, styled } from '@mui/material';
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

type Pokedex = {
  [key: string]: string;
};

type Props = {
  className: string;
  terastallize: boolean;
  statusAilment: StatusAilment;
  terastalType: TerastalType;
  repPokemonIcon: (newValue: string) => void;
  repBattleStatus: (newValue: string) => void;
  repTerastallized: (newValue: boolean) => void;
  repStatusAilment: (newValue: StatusAilment) => void;
  repTerastalType: (newValue: StatusAilment) => void;
  pokedex: Pokedex[];
  selectPokemon: string | null;
};

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 16,
  height: 16,
  border: `1px solid ${theme.palette.error.light}`,
}));

const TerastalAvatar = styled(Avatar)(() => ({
  width: 24,
  height: 24,
}));

const StatusAilmentlAvatar = styled(Avatar)(() => ({
  width: 16,
  height: 16,
}));

export function PokemonAvatar({
  className,
  terastallize,
  statusAilment,
  terastalType,
  repPokemonIcon,
  repBattleStatus,
  repTerastallized,
  repStatusAilment,
  repTerastalType,
  pokedex,
  selectPokemon,
}: Props) {
  const getPokemonIcon = (name: string | null) => {
    const pokeName = pokedex.findIndex((data) => data.name === name);
    if (typeof pokeName !== 'undefined') {
      return pokedex[pokeName];
    }
  };

  // →型をポケモンの名前に一致しているかどうかに変えたい
  const pokemonIcon: Pokedex | undefined = getPokemonIcon(selectPokemon);

  useEffect(() => {
    repBattleStatus(className);
    repTerastallized(terastallize);
    repStatusAilment(statusAilment);
    repTerastalType(terastalType);

    //ifを指定しないとundefindで画像を読み込めず、ページ自体も読み込めない
    if (pokemonIcon !== undefined) {
      repPokemonIcon(pokemonIcon.img1);
    }
  }, [pokemonIcon, className, terastallize, statusAilment]);

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
      <Badge
        id="StatusAilment"
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <StatusAilmentlAvatar
            variant="rounded"
            style={
              statusAilment !== '' && className === 'active'
                ? { visibility: 'visible' }
                : { visibility: 'hidden' }
            }
            src={StatusAilmentIcon(statusAilment)}
          />
        }
      >
        <Badge
          id="Terastallize"
          overlap="circular"
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          badgeContent={
            <TerastalAvatar
              variant="rounded"
              style={
                terastallize === true && className !== 'benched'
                  ? { visibility: 'visible' }
                  : { visibility: 'hidden' }
              }
              src={TerastalTypeIcon(terastalType)}
            />
          }
        >
          <Badge
            id="Fainting"
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <SmallAvatar
                variant="rounded"
                style={
                  className === 'fainting' ? { visibility: 'visible' } : { visibility: 'hidden' }
                }
                src={FTN}
              />
            }
          >
            <Avatar
              variant="rounded"
              className={className}
              src={
                pokemonIcon === undefined
                  ? 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png'
                  : pokemonIcon['img1']
              }
              sx={{
                height: 48,
                width: 48,
              }}
            />
          </Badge>
        </Badge>
      </Badge>
    </>
  );
}
