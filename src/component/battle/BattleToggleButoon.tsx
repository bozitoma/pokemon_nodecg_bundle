import './style.css';
import { useRecoilState } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { PlayerNum, PokemonNum, BattleState } from '../../types/scoreboard';
import BALL from '../../assets/BALL_icon.png';

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

export function BattleToggleButton({ player, pokemonNum }: Props) {
  const [scoreboard, setScoreborad] = useRecoilState(scoreboradInfoAtom);

  const handleChangeBattleState = (_event: unknown, newBattleState: BattleState | null) => {
    if (newBattleState !== null) {
      setScoreborad((prev) => ({
        ...prev,
        [player]: {
          ...prev[player],
          [pokemonNum]: {
            ...prev[player][pokemonNum],
            battleState: newBattleState,
          },
        },
      }));
    }
  };

  return (
    <>
      <StyledToggleButtonGroup
        id={`${player}-${pokemonNum}-BattleToggleButton`}
        className="toggleBotton"
        size="small"
        value={scoreboard[player][pokemonNum].battleState}
        exclusive
        onChange={handleChangeBattleState}
      >
        <ToggleButton value="Benched" aria-label="ベンチ" tabIndex={-1}>
          <img className="Benched" width="34" height="34" src={BALL} alt="" />
        </ToggleButton>
        <ToggleButton value="Active" aria-label="バトル" tabIndex={-1}>
          <img width="34" height="34" src={BALL} alt="" />
        </ToggleButton>
        <ToggleButton value="Fainting" aria-label="ひんし" tabIndex={-1}>
          <img className="Fainting" width="34" height="34" src={BALL} alt="" />
        </ToggleButton>
      </StyledToggleButtonGroup>
    </>
  );
}
