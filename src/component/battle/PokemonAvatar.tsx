import { Avatar, Badge, styled } from '@mui/material';
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
import { usePokedex } from '../../hooks/usePokedex';
import { useRecoilValue } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { PlayerNum, PokemonNum } from '../../types/scoreboard';
import { useEffect } from 'react';
import { useRepList } from '../../hooks/useRepList';

type Props = {
  player: PlayerNum;
  pokemonNum: PokemonNum;
};

const SmallAvatar = styled(Avatar)(() => ({
  width: 16,
  height: 16,
}));

const TerastalAvatar = styled(Avatar)(() => ({
  width: 24,
  height: 24,
}));

const StatusAilmentlAvatar = styled(Avatar)(() => ({
  width: 16,
  height: 16,
}));

export function PokemonAvatar({ player, pokemonNum }: Props) {
  const { pokedex } = usePokedex();
  const { setRepBattleParty } = useRepList();
  const scoreboard = useRecoilValue(scoreboradInfoAtom);
  const selectPokemon = scoreboard[player][pokemonNum].name;
  const battleState = scoreboard[player][pokemonNum].battleState;
  const terastallize = scoreboard[player][pokemonNum].terastallize;
  const statusAilment = scoreboard[player][pokemonNum].statusAilment;
  const terastalType = scoreboard[player][pokemonNum].teraType;

  const getPokemonIcon = (name: string | null) => {
    const pokeName = pokedex.findIndex((data) => data.name === name);
    if (typeof pokeName !== 'undefined') {
      const index = pokedex[pokeName];
      const icon =
        index === undefined
          ? 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png'
          : index['img1'];
      return icon;
    }
  };

  // →型をポケモンの名前に一致しているかどうかに変えたい
  const pokemonIcon: string | undefined = getPokemonIcon(selectPokemon);

  // 選択の内容をレプリカントにも保存する
  useEffect(() => {
    setRepBattleParty({
      Player1: {
        pokemon1: {
          name: scoreboard.Player1.pokemon1.name, //ポケモン名
          icon: getPokemonIcon(scoreboard.Player1.pokemon1.name), // アイコンのURL
          teraType: scoreboard.Player1.pokemon1.teraType, //テラスタイプ
          battleState: scoreboard.Player1.pokemon1.battleState, // 選出状況
          statusAilment: scoreboard.Player1.pokemon1.statusAilment, //状態異常
          terastallize: scoreboard.Player1.pokemon1.terastallize, //テラスタルの使用を表す真偽値
          terastalButton: scoreboard.Player1.pokemon1.terastalButton,
        },
        pokemon2: {
          name: scoreboard.Player1.pokemon2.name, //ポケモン名
          icon: getPokemonIcon(scoreboard.Player1.pokemon2.name), // アイコンのURL
          teraType: scoreboard.Player1.pokemon2.teraType, //テラスタイプ
          battleState: scoreboard.Player1.pokemon2.battleState, // 選出状況
          statusAilment: scoreboard.Player1.pokemon2.statusAilment, //状態異常
          terastallize: scoreboard.Player1.pokemon2.terastallize, //テラスタルの使用を表す真偽値
          terastalButton: scoreboard.Player1.pokemon2.terastalButton,
        },
        pokemon3: {
          name: scoreboard.Player1.pokemon3.name, //ポケモン名
          icon: getPokemonIcon(scoreboard.Player1.pokemon3.name), // アイコンのURL
          teraType: scoreboard.Player1.pokemon3.teraType, //テラスタイプ
          battleState: scoreboard.Player1.pokemon3.battleState, // 選出状況
          statusAilment: scoreboard.Player1.pokemon3.statusAilment, //状態異常
          terastallize: scoreboard.Player1.pokemon3.terastallize, //テラスタルの使用を表す真偽値
          terastalButton: scoreboard.Player1.pokemon3.terastalButton,
        },
        pokemon4: {
          name: scoreboard.Player1.pokemon4.name, //ポケモン名
          icon: getPokemonIcon(scoreboard.Player1.pokemon4.name), // アイコンのURL
          teraType: scoreboard.Player1.pokemon4.teraType, //テラスタイプ
          battleState: scoreboard.Player1.pokemon4.battleState, // 選出状況
          statusAilment: scoreboard.Player1.pokemon4.statusAilment, //状態異常
          terastallize: scoreboard.Player1.pokemon4.terastallize, //テラスタルの使用を表す真偽値
          terastalButton: scoreboard.Player1.pokemon4.terastalButton,
        },
        pokemon5: {
          name: scoreboard.Player1.pokemon5.name, //ポケモン名
          icon: getPokemonIcon(scoreboard.Player1.pokemon5.name), // アイコンのURL
          teraType: scoreboard.Player1.pokemon5.teraType, //テラスタイプ
          battleState: scoreboard.Player1.pokemon5.battleState, // 選出状況
          statusAilment: scoreboard.Player1.pokemon5.statusAilment, //状態異常
          terastallize: scoreboard.Player1.pokemon5.terastallize, //テラスタルの使用を表す真偽値
          terastalButton: scoreboard.Player1.pokemon5.terastalButton,
        },
        pokemon6: {
          name: scoreboard.Player1.pokemon6.name, //ポケモン名
          icon: getPokemonIcon(scoreboard.Player1.pokemon6.name), // アイコンのURL
          teraType: scoreboard.Player1.pokemon6.teraType, //テラスタイプ
          battleState: scoreboard.Player1.pokemon6.battleState, // 選出状況
          statusAilment: scoreboard.Player1.pokemon6.statusAilment, //状態異常
          terastallize: scoreboard.Player1.pokemon6.terastallize, //テラスタルの使用を表す真偽値
          terastalButton: scoreboard.Player1.pokemon6.terastalButton,
        },
      },
      Player2: {
        pokemon1: {
          name: scoreboard.Player2.pokemon1.name, //ポケモン名
          icon: getPokemonIcon(scoreboard.Player2.pokemon1.name), // アイコンのURL
          teraType: scoreboard.Player2.pokemon1.teraType, //テラスタイプ
          battleState: scoreboard.Player2.pokemon1.battleState, // 選出状況
          statusAilment: scoreboard.Player2.pokemon1.statusAilment, //状態異常
          terastallize: scoreboard.Player2.pokemon1.terastallize, //テラスタルの使用を表す真偽値
          terastalButton: scoreboard.Player2.pokemon1.terastalButton,
        },
        pokemon2: {
          name: scoreboard.Player2.pokemon2.name, //ポケモン名
          icon: getPokemonIcon(scoreboard.Player2.pokemon2.name), // アイコンのURL
          teraType: scoreboard.Player2.pokemon2.teraType, //テラスタイプ
          battleState: scoreboard.Player2.pokemon2.battleState, // 選出状況
          statusAilment: scoreboard.Player2.pokemon2.statusAilment, //状態異常
          terastallize: scoreboard.Player2.pokemon2.terastallize, //テラスタルの使用を表す真偽値
          terastalButton: scoreboard.Player2.pokemon2.terastalButton,
        },
        pokemon3: {
          name: scoreboard.Player2.pokemon3.name, //ポケモン名
          icon: getPokemonIcon(scoreboard.Player2.pokemon3.name), // アイコンのURL
          teraType: scoreboard.Player2.pokemon3.teraType, //テラスタイプ
          battleState: scoreboard.Player2.pokemon3.battleState, // 選出状況
          statusAilment: scoreboard.Player2.pokemon3.statusAilment, //状態異常
          terastallize: scoreboard.Player2.pokemon3.terastallize, //テラスタルの使用を表す真偽値
          terastalButton: scoreboard.Player2.pokemon3.terastalButton,
        },
        pokemon4: {
          name: scoreboard.Player2.pokemon4.name, //ポケモン名
          icon: getPokemonIcon(scoreboard.Player2.pokemon4.name), // アイコンのURL
          teraType: scoreboard.Player2.pokemon4.teraType, //テラスタイプ
          battleState: scoreboard.Player2.pokemon4.battleState, // 選出状況
          statusAilment: scoreboard.Player2.pokemon4.statusAilment, //状態異常
          terastallize: scoreboard.Player2.pokemon4.terastallize, //テラスタルの使用を表す真偽値
          terastalButton: scoreboard.Player2.pokemon4.terastalButton,
        },
        pokemon5: {
          name: scoreboard.Player2.pokemon5.name, //ポケモン名
          icon: getPokemonIcon(scoreboard.Player2.pokemon5.name), // アイコンのURL
          teraType: scoreboard.Player2.pokemon5.teraType, //テラスタイプ
          battleState: scoreboard.Player2.pokemon5.battleState, // 選出状況
          statusAilment: scoreboard.Player2.pokemon5.statusAilment, //状態異常
          terastallize: scoreboard.Player2.pokemon5.terastallize, //テラスタルの使用を表す真偽値
          terastalButton: scoreboard.Player2.pokemon5.terastalButton,
        },
        pokemon6: {
          name: scoreboard.Player2.pokemon6.name, //ポケモン名
          icon: getPokemonIcon(scoreboard.Player2.pokemon6.name), // アイコンのURL
          teraType: scoreboard.Player2.pokemon6.teraType, //テラスタイプ
          battleState: scoreboard.Player2.pokemon6.battleState, // 選出状況
          statusAilment: scoreboard.Player2.pokemon6.statusAilment, //状態異常
          terastallize: scoreboard.Player2.pokemon6.terastallize, //テラスタルの使用を表す真偽値
          terastalButton: scoreboard.Player2.pokemon6.terastalButton,
        },
      },
    });
  }, [scoreboard]);

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
    <>
      <Badge
        id="StatusAilment"
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <StatusAilmentlAvatar
            variant="rounded"
            style={
              statusAilment !== 'なし' && battleState === 'Active'
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
                terastallize === true && battleState !== 'Benched'
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
                  battleState === 'Fainting' ? { visibility: 'visible' } : { visibility: 'hidden' }
                }
                src={FTN}
              />
            }
          >
            <Avatar
              variant="rounded"
              className={battleState}
              src={pokemonIcon}
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
