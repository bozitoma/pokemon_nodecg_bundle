import { ToggleButton, styled, ToggleButtonGroup } from '@mui/material';
import { useRecoilState } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { PlayerNum, PokemonNum } from '../../types/scoreboard';
import { pokemonNumList } from '../../types/scoreboardDefaultValue';

type Props = {
  player: PlayerNum;
  pokemonNum: PokemonNum;
};

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export function TerastalButton({ player, pokemonNum }: Props) {
  const [scoreboard, setScoreborad] = useRecoilState(scoreboradInfoAtom);

  const handleTerastallized = () => {
    pokemonNumList.map((pokemon) => {
      setScoreborad((prev) => ({
        ...prev,
        [player]: {
          ...prev[player],
          [pokemon]: {
            ...prev[player][pokemon],
            //選択したポケモンをテラスタル済みにする
            terastallize:
              pokemon === pokemonNum
                ? !prev[player][pokemon].terastallize
                : prev[player][pokemon].terastallize,
            //それ以外のポケモンはテラスタルボタンを押せないようにする
            terastalButton:
              pokemon !== pokemonNum
                ? !prev[player][pokemon].terastalButton
                : prev[player][pokemon].terastalButton,
          },
        },
      }));
    });
  };

  return (
    <StyledToggleButtonGroup
      id={`${player}-${pokemonNum}-TerastalButton`}
      size="small"
      onChange={handleTerastallized}
    >
      <ToggleButton
        value="terastal"
        aria-label="terastal"
        selected={scoreboard[player][pokemonNum].terastallize}
        color="error"
        disabled={scoreboard[player][pokemonNum].terastalButton ? true : false}
        tabIndex={-1} //Tabキーでの選択を無効化
      >
        <img
          width="34"
          height="34"
          src="https://resource.pokemon-home.com/battledata/img/terastal/icon_terastal_01.png"
          alt=""
        />
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
}
