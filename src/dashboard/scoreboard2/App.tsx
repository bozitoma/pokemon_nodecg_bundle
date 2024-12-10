import { Button, Stack } from '@mui/material';
import { BattleManegement } from '../../components/BattleManegement';
import { BattleToggleButton } from '../../components/BattleToggleButton';
import { PokemonSelector } from '../../components/PokemonSelector';
import { PokemonAvatar } from '../../components/PokemonSelector/PokemonAvatar';
import { StatusAilmentBadge } from '../../components/PokemonSelector/StatusAilmentBadge';
import { TerastallizeBadge } from '../../components/PokemonSelector/TerastallizeBadge';
import { StatusAilmentSelector } from '../../components/StatusAilmentSelector';
import { TerastalButton } from '../../components/Terastal/TerastalButton';
import './App.css';
import { useReplicant } from '../../hooks/useReplicant';
import { Timer } from '../../components/Timer/Timer';
import { TopcutSelector } from '../../components/Topcut/TopcutSelector';
import DisplayToucut from '../../components/Topcut/DisplayToucut';
import { BattleManegements } from './BattleManegements';
import { WrappingTimer } from './WrappingTimer';
import { Infomations } from './Infomations';
// import { Bestof } from '../../components/Bestof';
// import { Round } from '../../components/Round';
// import { Scores } from '../../components/Scores';
// import { SwissScores } from '../../components/SwissScores';
// // import { BattleToggleButton } from '../../components/BattleToggleButton';

// import { TerastalButton } from '../../components/Terastal/TerastalButton';

// import { TerastalTypeSelector } from '../../components/Terastal/TerastalTypeSelector';
// import { StatusAilmentSelector } from '../../components/StatusAilmentSelector';

export function App() {
  // const [my, setMy] = useAtom(
  //   battleStateAtomFamily({ playerSide: 'Player1', pokemonNum: 'pokemon1' })
  // );

  //   const [my2, setMy2] = useAtom(
  //     battleStateAtomFamily({ playerSide: 'Player1', pokemonNum: 'pokemon2' })
  //   );

  //     const [my3, setMy3] = useAtom(
  //       battleStateAtomFamily({ playerSide: 'Player2', pokemonNum: 'pokemon1' })
  //     );

  // const swissPlayer1 = useAtomValue(swissAtom({ playerSide: 'Player1' }));
  // const swissPlayer2 = useAtomValue(swissAtom({ playerSide: 'Player2' }));

  // const swissSwap = useSetAtom(swissSwapAtom);

  // console.log('swissPlayer1', swissPlayer1);
  // console.log('swissPlayer2', swissPlayer2);

  // const Benched = () => {
  //   setMy('Benched');
  // };
  // const Active = () => {
  //   setMy('Active');
  // };
  // const Fainting = () => {
  //   setMy('Fainting');
  // };
  // const swap = () => {
  //   swissSwap();
  // }

  // const test = useAtomValue(testAtom({ playerSide: 'Player1', pokemonNum: 'pokemon1' }));
  // console.log(test);

  // const { Heading, WhiteCard } = useStyled();

  // const ranking = () => nodecg.sendMessage('ranking');
  // const onClick = () => {
  //   ranking();
  // };
  return (
    <>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Infomations />
          <WrappingTimer />
        </Stack>
        <Stack direction="row" spacing={2}>
          <BattleManegements playerSide="Player1" />
          <BattleManegements playerSide="Player2" />
        </Stack>
      </Stack>
    </>
  );
}
