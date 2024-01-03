import { PokemonAvatarGraphics } from '../../component/PokemonAvatarGraphics';
import { useRepList } from '../../hooks/useRepList';
import './App.css';

export function App() {
  const {
    repPlayer1Poke1Icon,
    repPlayer1Poke2Icon,
    repPlayer1Poke3Icon,
    repPlayer1Poke4Icon,

    repPlayer1Poke1BattleStatus,
    repPlayer1Poke2BattleStatus,
    repPlayer1Poke3BattleStatus,
    repPlayer1Poke4BattleStatus,

    repPlayer1Poke1StatusAilment,
    repPlayer1Poke2StatusAilment,
    repPlayer1Poke3StatusAilment,
    repPlayer1Poke4StatusAilment,

    repPlayer2Poke1Icon,
    repPlayer2Poke2Icon,
    repPlayer2Poke3Icon,
    repPlayer2Poke4Icon,

    repPlayer2Poke1BattleStatus,
    repPlayer2Poke2BattleStatus,
    repPlayer2Poke3BattleStatus,
    repPlayer2Poke4BattleStatus,

    repPlayer2Poke1StatusAilment,
    repPlayer2Poke2StatusAilment,
    repPlayer2Poke3StatusAilment,
    repPlayer2Poke4StatusAilment,
  } = useRepList();

  return (
    <>
      <div className="wrapper">
        <div className="p1-party">
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer1Poke1Icon}
            BattleStatus={repPlayer1Poke1BattleStatus}
            StatusAilment={repPlayer1Poke1StatusAilment}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer1Poke2Icon}
            BattleStatus={repPlayer1Poke2BattleStatus}
            StatusAilment={repPlayer1Poke2StatusAilment}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer1Poke3Icon}
            BattleStatus={repPlayer1Poke3BattleStatus}
            StatusAilment={repPlayer1Poke3StatusAilment}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer1Poke4Icon}
            BattleStatus={repPlayer1Poke4BattleStatus}
            StatusAilment={repPlayer1Poke4StatusAilment}
          />
        </div>
        <div className="p2-party">
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer2Poke1Icon}
            BattleStatus={repPlayer2Poke1BattleStatus}
            StatusAilment={repPlayer2Poke1StatusAilment}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer2Poke2Icon}
            BattleStatus={repPlayer2Poke2BattleStatus}
            StatusAilment={repPlayer2Poke2StatusAilment}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer2Poke3Icon}
            BattleStatus={repPlayer2Poke3BattleStatus}
            StatusAilment={repPlayer2Poke3StatusAilment}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer2Poke4Icon}
            BattleStatus={repPlayer2Poke4BattleStatus}
            StatusAilment={repPlayer2Poke4StatusAilment}
          />
        </div>
      </div>
    </>
  );
}
