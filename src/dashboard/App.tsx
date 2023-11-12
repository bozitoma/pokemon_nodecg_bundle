import { Paper, Stack, styled } from '@mui/material';
import './App.css';
import { useBattleToggleButton } from '../hooks/useBattleToggleButton';
import { BattleManegement } from '../component/BattleManegement';
import { RoundInfo } from '../component/RoundInfo';
import { useBestOfInfo, useScore, useScoreboard } from '../hooks/useScoreboard';
import { BestOfInfo } from '../component/BestOfInfo';
import { PlayersInfo } from '../component/PlayerInfo';
import { ScoreCounter } from '../component/ScoreCounter';
import { ScoreboardButtons } from '../component/ScoreboardButtons';
import { useTerastalButton } from '../hooks/useTerastalButton';
import { useStatusAilmentSelector } from '../hooks/useStatusAilmentSelector';
import { CountDownTimer } from '../component/CountDownTimer/CountDownTimer';
import { Monitor } from '../component/Monitor';
import { useRepList } from '../hooks/useRepList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgba(255, 255, 255, 0.95);',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: 18,
  fontWeight: 'bold',
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#525F78',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  color: '#F5F5F5',
  fontSize: 18,
  fontWeight: 'bold',
}));

export function App() {
  const {
    alignment,
    handleAlignmentP1poke1,
    handleAlignmentP1poke2,
    handleAlignmentP1poke3,
    handleAlignmentP1poke4,
    handleAlignmentP1poke5,
    handleAlignmentP1poke6,
    handleAlignmentP2poke1,
    handleAlignmentP2poke2,
    handleAlignmentP2poke3,
    handleAlignmentP2poke4,
    handleAlignmentP2poke5,
    handleAlignmentP2poke6,
    pokeStatusP1poke1,
    pokeStatusP1poke2,
    pokeStatusP1poke3,
    pokeStatusP1poke4,
    pokeStatusP1poke5,
    pokeStatusP1poke6,
    pokeStatusP2poke1,
    pokeStatusP2poke2,
    pokeStatusP2poke3,
    pokeStatusP2poke4,
    pokeStatusP2poke5,
    pokeStatusP2poke6,
    resetBattleToggleButton,
  } = useBattleToggleButton();

  const { scoreboardInfo, roundSelect, playerNameEdit, playerNameSwap } = useScoreboard();

  const { bestOfInfo, setBestOfInfo, stateBestOfInfo, handleButtonChange, handleTextChange } =
    useBestOfInfo();

  const { stateScore1p, stateScore2p, setStateScore1p, setStateScore2p, scoreReset } = useScore();

  const {
    terastallize,
    isTerastallize,
    resetTerastallized,
    handleTerastallizedP1poke1,
    handleTerastallizedP1poke2,
    handleTerastallizedP1poke3,
    handleTerastallizedP1poke4,
    handleTerastallizedP1poke5,
    handleTerastallizedP1poke6,
    handleTerastallizedP2poke1,
    handleTerastallizedP2poke2,
    handleTerastallizedP2poke3,
    handleTerastallizedP2poke4,
    handleTerastallizedP2poke5,
    handleTerastallizedP2poke6,
  } = useTerastalButton();

  const {
    statusAilment,
    resetStatusAilment,
    handleChangeStatusAilmentP1poke1,
    handleChangeStatusAilmentP1poke2,
    handleChangeStatusAilmentP1poke3,
    handleChangeStatusAilmentP1poke4,
    handleChangeStatusAilmentP1poke5,
    handleChangeStatusAilmentP1poke6,
    handleChangeStatusAilmentP2poke1,
    handleChangeStatusAilmentP2poke2,
    handleChangeStatusAilmentP2poke3,
    handleChangeStatusAilmentP2poke4,
    handleChangeStatusAilmentP2poke5,
    handleChangeStatusAilmentP2poke6,
  } = useStatusAilmentSelector();

  const {
    repPlayer1Name,
    repPlayer2Name,

    setRepPlayer1Poke1Icon,
    setRepPlayer1Poke2Icon,
    setRepPlayer1Poke3Icon,
    setRepPlayer1Poke4Icon,
    setRepPlayer1Poke5Icon,
    setRepPlayer1Poke6Icon,

    setRepPlayer1Poke1BattleStatus,
    setRepPlayer1Poke2BattleStatus,
    setRepPlayer1Poke3BattleStatus,
    setRepPlayer1Poke4BattleStatus,
    setRepPlayer1Poke5BattleStatus,
    setRepPlayer1Poke6BattleStatus,

    setRepPlayer1Poke1Terastallized,
    setRepPlayer1Poke2Terastallized,
    setRepPlayer1Poke3Terastallized,
    setRepPlayer1Poke4Terastallized,
    setRepPlayer1Poke5Terastallized,
    setRepPlayer1Poke6Terastallized,

    setRepPlayer1Poke1StatusAilment,
    setRepPlayer1Poke2StatusAilment,
    setRepPlayer1Poke3StatusAilment,
    setRepPlayer1Poke4StatusAilment,
    setRepPlayer1Poke5StatusAilment,
    setRepPlayer1Poke6StatusAilment,

    setRepPlayer2Poke1Icon,
    setRepPlayer2Poke2Icon,
    setRepPlayer2Poke3Icon,
    setRepPlayer2Poke4Icon,
    setRepPlayer2Poke5Icon,
    setRepPlayer2Poke6Icon,

    setRepPlayer2Poke1BattleStatus,
    setRepPlayer2Poke2BattleStatus,
    setRepPlayer2Poke3BattleStatus,
    setRepPlayer2Poke4BattleStatus,
    setRepPlayer2Poke5BattleStatus,
    setRepPlayer2Poke6BattleStatus,

    setRepPlayer2Poke1Terastallized,
    setRepPlayer2Poke2Terastallized,
    setRepPlayer2Poke3Terastallized,
    setRepPlayer2Poke4Terastallized,
    setRepPlayer2Poke5Terastallized,
    setRepPlayer2Poke6Terastallized,

    setRepPlayer2Poke1StatusAilment,
    setRepPlayer2Poke2StatusAilment,
    setRepPlayer2Poke3StatusAilment,
    setRepPlayer2Poke4StatusAilment,
    setRepPlayer2Poke5StatusAilment,
    setRepPlayer2Poke6StatusAilment,
  } = useRepList();

  return (
    <>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Monitor />
          <Item>
            <Stack spacing={2}>
              <Item2>Scoreboard</Item2>
              <Stack direction="row" spacing={2}>
                <RoundInfo roundText={scoreboardInfo.RoundInfo} roundSelect={roundSelect} />
                <BestOfInfo
                  alignment={bestOfInfo}
                  setAlignment={setBestOfInfo}
                  stateBestOfInfo={stateBestOfInfo}
                  handleButtonChange={handleButtonChange}
                  handleTextChange={handleTextChange}
                />
              </Stack>
              <PlayersInfo
                player1={scoreboardInfo.Player1.name}
                player2={scoreboardInfo.Player2.name}
                playerNameEdit={playerNameEdit}
                playerNameSwap={playerNameSwap}
              />
              <ScoreCounter
                stateScore1p={stateScore1p}
                stateScore2p={stateScore2p}
                setStateScore1p={setStateScore1p}
                setStateScore2p={setStateScore2p}
                scoreReset={scoreReset}
              />
              <ScoreboardButtons
                Player1Name={scoreboardInfo.Player1.name}
                Player2Name={scoreboardInfo.Player2.name}
                Player1Score={stateScore1p}
                Player2Score={stateScore2p}
                RoundInfo={scoreboardInfo.RoundInfo}
                BestOfInfo={bestOfInfo}
                resetBattleToggleButton={resetBattleToggleButton}
                resetTerastallized={resetTerastallized}
                resetStatusAilment={resetStatusAilment}
              />
            </Stack>
          </Item>
          <Item>
            <Item2>Timer</Item2>
            <CountDownTimer />
          </Item>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Item>
            <Item2>{repPlayer1Name}</Item2>
            <BattleManegement
              alignment={alignment.Player1.pokemon1}
              handleAlignment={handleAlignmentP1poke1}
              className={pokeStatusP1poke1}
              terastallize={terastallize.Player1.pokemon1}
              handleTerastallized={handleTerastallizedP1poke1}
              statusAilment={statusAilment.Player1.pokemon1}
              handleChangeStatusAilment={handleChangeStatusAilmentP1poke1}
              isTerastallize={isTerastallize.Player1.pokemon1}
              repPokemonIcon={setRepPlayer1Poke1Icon}
              repBattleStatus={setRepPlayer1Poke1BattleStatus}
              repTerastallized={setRepPlayer1Poke1Terastallized}
              repStatusAilment={setRepPlayer1Poke1StatusAilment}
            />
            <BattleManegement
              alignment={alignment.Player1.pokemon2}
              handleAlignment={handleAlignmentP1poke2}
              className={pokeStatusP1poke2}
              terastallize={terastallize.Player1.pokemon2}
              handleTerastallized={handleTerastallizedP1poke2}
              statusAilment={statusAilment.Player1.pokemon2}
              handleChangeStatusAilment={handleChangeStatusAilmentP1poke2}
              isTerastallize={isTerastallize.Player1.pokemon2}
              repPokemonIcon={setRepPlayer1Poke2Icon}
              repBattleStatus={setRepPlayer1Poke2BattleStatus}
              repTerastallized={setRepPlayer1Poke2Terastallized}
              repStatusAilment={setRepPlayer1Poke2StatusAilment}
            />
            <BattleManegement
              alignment={alignment.Player1.pokemon3}
              handleAlignment={handleAlignmentP1poke3}
              className={pokeStatusP1poke3}
              terastallize={terastallize.Player1.pokemon3}
              handleTerastallized={handleTerastallizedP1poke3}
              statusAilment={statusAilment.Player1.pokemon3}
              handleChangeStatusAilment={handleChangeStatusAilmentP1poke3}
              isTerastallize={isTerastallize.Player1.pokemon3}
              repPokemonIcon={setRepPlayer1Poke3Icon}
              repBattleStatus={setRepPlayer1Poke3BattleStatus}
              repTerastallized={setRepPlayer1Poke3Terastallized}
              repStatusAilment={setRepPlayer1Poke3StatusAilment}
            />
            <BattleManegement
              alignment={alignment.Player1.pokemon4}
              handleAlignment={handleAlignmentP1poke4}
              className={pokeStatusP1poke4}
              terastallize={terastallize.Player1.pokemon4}
              handleTerastallized={handleTerastallizedP1poke4}
              statusAilment={statusAilment.Player1.pokemon4}
              handleChangeStatusAilment={handleChangeStatusAilmentP1poke4}
              isTerastallize={isTerastallize.Player1.pokemon4}
              repPokemonIcon={setRepPlayer1Poke4Icon}
              repBattleStatus={setRepPlayer1Poke4BattleStatus}
              repTerastallized={setRepPlayer1Poke4Terastallized}
              repStatusAilment={setRepPlayer1Poke4StatusAilment}
            />
            <BattleManegement
              alignment={alignment.Player1.pokemon5}
              handleAlignment={handleAlignmentP1poke5}
              className={pokeStatusP1poke5}
              terastallize={terastallize.Player1.pokemon5}
              handleTerastallized={handleTerastallizedP1poke5}
              statusAilment={statusAilment.Player1.pokemon5}
              handleChangeStatusAilment={handleChangeStatusAilmentP1poke5}
              isTerastallize={isTerastallize.Player1.pokemon5}
              repPokemonIcon={setRepPlayer1Poke5Icon}
              repBattleStatus={setRepPlayer1Poke5BattleStatus}
              repTerastallized={setRepPlayer1Poke5Terastallized}
              repStatusAilment={setRepPlayer1Poke5StatusAilment}
            />
            <BattleManegement
              alignment={alignment.Player1.pokemon6}
              handleAlignment={handleAlignmentP1poke6}
              className={pokeStatusP1poke6}
              terastallize={terastallize.Player1.pokemon6}
              handleTerastallized={handleTerastallizedP1poke6}
              statusAilment={statusAilment.Player1.pokemon6}
              handleChangeStatusAilment={handleChangeStatusAilmentP1poke6}
              isTerastallize={isTerastallize.Player1.pokemon6}
              repPokemonIcon={setRepPlayer1Poke6Icon}
              repBattleStatus={setRepPlayer1Poke6BattleStatus}
              repTerastallized={setRepPlayer1Poke6Terastallized}
              repStatusAilment={setRepPlayer1Poke6StatusAilment}
            />
          </Item>
          <Item>
            <Item2>{repPlayer2Name}</Item2>
            <BattleManegement
              alignment={alignment.Player2.pokemon1}
              handleAlignment={handleAlignmentP2poke1}
              className={pokeStatusP2poke1}
              terastallize={terastallize.Player2.pokemon1}
              handleTerastallized={handleTerastallizedP2poke1}
              statusAilment={statusAilment.Player2.pokemon1}
              handleChangeStatusAilment={handleChangeStatusAilmentP2poke1}
              isTerastallize={isTerastallize.Player2.pokemon1}
              repPokemonIcon={setRepPlayer2Poke1Icon}
              repBattleStatus={setRepPlayer2Poke1BattleStatus}
              repTerastallized={setRepPlayer2Poke1Terastallized}
              repStatusAilment={setRepPlayer2Poke1StatusAilment}
            />
            <BattleManegement
              alignment={alignment.Player2.pokemon2}
              handleAlignment={handleAlignmentP2poke2}
              className={pokeStatusP2poke2}
              terastallize={terastallize.Player2.pokemon2}
              handleTerastallized={handleTerastallizedP2poke2}
              statusAilment={statusAilment.Player2.pokemon2}
              handleChangeStatusAilment={handleChangeStatusAilmentP2poke2}
              isTerastallize={isTerastallize.Player2.pokemon2}
              repPokemonIcon={setRepPlayer2Poke2Icon}
              repBattleStatus={setRepPlayer2Poke2BattleStatus}
              repTerastallized={setRepPlayer2Poke2Terastallized}
              repStatusAilment={setRepPlayer2Poke2StatusAilment}
            />
            <BattleManegement
              alignment={alignment.Player2.pokemon3}
              handleAlignment={handleAlignmentP2poke3}
              className={pokeStatusP2poke3}
              terastallize={terastallize.Player2.pokemon3}
              handleTerastallized={handleTerastallizedP2poke3}
              statusAilment={statusAilment.Player2.pokemon3}
              handleChangeStatusAilment={handleChangeStatusAilmentP2poke3}
              isTerastallize={isTerastallize.Player2.pokemon3}
              repPokemonIcon={setRepPlayer2Poke3Icon}
              repBattleStatus={setRepPlayer2Poke3BattleStatus}
              repTerastallized={setRepPlayer2Poke3Terastallized}
              repStatusAilment={setRepPlayer2Poke3StatusAilment}
            />
            <BattleManegement
              alignment={alignment.Player2.pokemon4}
              handleAlignment={handleAlignmentP2poke4}
              className={pokeStatusP2poke4}
              terastallize={terastallize.Player2.pokemon4}
              handleTerastallized={handleTerastallizedP2poke4}
              statusAilment={statusAilment.Player2.pokemon4}
              handleChangeStatusAilment={handleChangeStatusAilmentP2poke4}
              isTerastallize={isTerastallize.Player2.pokemon4}
              repPokemonIcon={setRepPlayer2Poke4Icon}
              repBattleStatus={setRepPlayer2Poke4BattleStatus}
              repTerastallized={setRepPlayer2Poke4Terastallized}
              repStatusAilment={setRepPlayer2Poke4StatusAilment}
            />
            <BattleManegement
              alignment={alignment.Player2.pokemon5}
              handleAlignment={handleAlignmentP2poke5}
              className={pokeStatusP2poke5}
              terastallize={terastallize.Player2.pokemon5}
              handleTerastallized={handleTerastallizedP2poke5}
              statusAilment={statusAilment.Player2.pokemon5}
              handleChangeStatusAilment={handleChangeStatusAilmentP2poke5}
              isTerastallize={isTerastallize.Player2.pokemon5}
              repPokemonIcon={setRepPlayer2Poke5Icon}
              repBattleStatus={setRepPlayer2Poke5BattleStatus}
              repTerastallized={setRepPlayer2Poke5Terastallized}
              repStatusAilment={setRepPlayer2Poke5StatusAilment}
            />
            <BattleManegement
              alignment={alignment.Player2.pokemon6}
              handleAlignment={handleAlignmentP2poke6}
              className={pokeStatusP2poke6}
              terastallize={terastallize.Player2.pokemon6}
              handleTerastallized={handleTerastallizedP2poke6}
              statusAilment={statusAilment.Player2.pokemon6}
              handleChangeStatusAilment={handleChangeStatusAilmentP2poke6}
              isTerastallize={isTerastallize.Player2.pokemon6}
              repPokemonIcon={setRepPlayer2Poke6Icon}
              repBattleStatus={setRepPlayer2Poke6BattleStatus}
              repTerastallized={setRepPlayer2Poke6Terastallized}
              repStatusAilment={setRepPlayer2Poke6StatusAilment}
            />
          </Item>
        </Stack>
      </Stack>
    </>
  );
}
