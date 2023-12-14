import { useEffect } from 'react';
import { Avatar, Badge, styled } from '@mui/material';
import type { StatusAilment } from '../types/scoreboard';
import PSN from '../assets/PSN_icon.png';
import BRN from '../assets/BRN_icon.png';
import FRZ from '../assets/FRZ_icon.png';
import PAR from '../assets/PAR_icon.png';
import SLP from '../assets/SLP_icon.png';
import FTN from '../assets/FTN_icon.png';

type Pokedex = {
  [key: string]: string;
};

type Props = {
  className: string;
  terastallize: boolean;
  statusAilment: StatusAilment;
  repPokemonIcon: (newValue: string) => void;
  repBattleStatus: (newValue: string) => void;
  repTerastallized: (newValue: boolean) => void;
  repStatusAilment: (newValue: StatusAilment) => void;
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
  repPokemonIcon,
  repBattleStatus,
  repTerastallized,
  repStatusAilment,
  pokedex,
  selectPokemon,
}: Props) {
  const getPokemonIcon = (name: string) => {
    const pokeName = pokedex.findIndex((data) => data['name'] === name);
    if (typeof pokeName !== 'undefined') {
      return pokedex[pokeName];
    }
  };

  // →型をポケモンの名前に一致しているかどうかに変えたい
  const pokemonIcon: Pokedex | undefined = getPokemonIcon(selectPokemon as unknown as string);

  useEffect(() => {
    repBattleStatus(className);
    repTerastallized(terastallize);
    repStatusAilment(statusAilment);

    //ifを指定しないとundefindで画像を読み込めず、ページ自体も読み込めない
    if (pokemonIcon !== undefined) {
      repPokemonIcon(pokemonIcon.img1);
    }
  }, [pokemonIcon, className, terastallize, statusAilment]);

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
              src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_01.png"
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
                  ? 'https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png'
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
