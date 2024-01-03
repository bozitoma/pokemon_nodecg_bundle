import { PokemonAvatarGraphics } from '../../component/PokemonAvatarGraphics';
import { useRepList } from '../../hooks/useRepList';
import './App.css';

export function App() {
  const {
    repPlayer1Poke1Icon,
    repPlayer1Poke2Icon,
    repPlayer1Poke3Icon,
    repPlayer1Poke4Icon,
    repPlayer1Poke5Icon,
    repPlayer1Poke6Icon,

    repPlayer1Poke1BattleStatus,
    repPlayer1Poke2BattleStatus,
    repPlayer1Poke3BattleStatus,
    repPlayer1Poke4BattleStatus,
    repPlayer1Poke5BattleStatus,
    repPlayer1Poke6BattleStatus,

    repPlayer1Poke1StatusAilment,
    repPlayer1Poke2StatusAilment,
    repPlayer1Poke3StatusAilment,
    repPlayer1Poke4StatusAilment,
    repPlayer1Poke5StatusAilment,
    repPlayer1Poke6StatusAilment,

    repPlayer2Poke1Icon,
    repPlayer2Poke2Icon,
    repPlayer2Poke3Icon,
    repPlayer2Poke4Icon,
    repPlayer2Poke5Icon,
    repPlayer2Poke6Icon,

    repPlayer2Poke1BattleStatus,
    repPlayer2Poke2BattleStatus,
    repPlayer2Poke3BattleStatus,
    repPlayer2Poke4BattleStatus,
    repPlayer2Poke5BattleStatus,
    repPlayer2Poke6BattleStatus,

    repPlayer2Poke1StatusAilment,
    repPlayer2Poke2StatusAilment,
    repPlayer2Poke3StatusAilment,
    repPlayer2Poke4StatusAilment,
    repPlayer2Poke5StatusAilment,
    repPlayer2Poke6StatusAilment,
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
        </div>
        <div className="p1-party">
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer1Poke4Icon}
            BattleStatus={repPlayer1Poke4BattleStatus}
            StatusAilment={repPlayer1Poke4StatusAilment}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer1Poke5Icon}
            BattleStatus={repPlayer1Poke5BattleStatus}
            StatusAilment={repPlayer1Poke5StatusAilment}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer1Poke6Icon}
            BattleStatus={repPlayer1Poke6BattleStatus}
            StatusAilment={repPlayer1Poke6StatusAilment}
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
        </div>
        <div className="p2-party">
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer2Poke4Icon}
            BattleStatus={repPlayer2Poke4BattleStatus}
            StatusAilment={repPlayer2Poke4StatusAilment}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer2Poke5Icon}
            BattleStatus={repPlayer2Poke5BattleStatus}
            StatusAilment={repPlayer2Poke5StatusAilment}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer2Poke6Icon}
            BattleStatus={repPlayer2Poke6BattleStatus}
            StatusAilment={repPlayer2Poke6StatusAilment}
          />
        </div>
      </div>
    </>
  );
}
