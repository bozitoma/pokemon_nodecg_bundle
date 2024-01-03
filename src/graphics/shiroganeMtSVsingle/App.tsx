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

    repPlayer1Poke1Terastallized,
    repPlayer1Poke2Terastallized,
    repPlayer1Poke3Terastallized,
    repPlayer1Poke4Terastallized,
    repPlayer1Poke5Terastallized,
    repPlayer1Poke6Terastallized,

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

    repPlayer2Poke1Terastallized,
    repPlayer2Poke2Terastallized,
    repPlayer2Poke3Terastallized,
    repPlayer2Poke4Terastallized,
    repPlayer2Poke5Terastallized,
    repPlayer2Poke6Terastallized,

    repPlayer2Poke1StatusAilment,
    repPlayer2Poke2StatusAilment,
    repPlayer2Poke3StatusAilment,
    repPlayer2Poke4StatusAilment,
    repPlayer2Poke5StatusAilment,
    repPlayer2Poke6StatusAilment,

    repPlayer1Poke1TerastalType,
    repPlayer1Poke2TerastalType,
    repPlayer1Poke3TerastalType,
    repPlayer1Poke4TerastalType,
    repPlayer1Poke5TerastalType,
    repPlayer1Poke6TerastalType,
    repPlayer2Poke1TerastalType,
    repPlayer2Poke2TerastalType,
    repPlayer2Poke3TerastalType,
    repPlayer2Poke4TerastalType,
    repPlayer2Poke5TerastalType,
    repPlayer2Poke6TerastalType,

    repTimer,
  } = useRepList();

  return (
    <>
      <div className="wrapper">
        <div className="p1-party">
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer1Poke1Icon}
            BattleStatus={repPlayer1Poke1BattleStatus}
            Terastallized={repPlayer1Poke1Terastallized}
            StatusAilment={repPlayer1Poke1StatusAilment}
            TerastalType={repPlayer1Poke1TerastalType}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer1Poke2Icon}
            BattleStatus={repPlayer1Poke2BattleStatus}
            Terastallized={repPlayer1Poke2Terastallized}
            StatusAilment={repPlayer1Poke2StatusAilment}
            TerastalType={repPlayer1Poke2TerastalType}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer1Poke3Icon}
            BattleStatus={repPlayer1Poke3BattleStatus}
            Terastallized={repPlayer1Poke3Terastallized}
            StatusAilment={repPlayer1Poke3StatusAilment}
            TerastalType={repPlayer1Poke3TerastalType}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer1Poke4Icon}
            BattleStatus={repPlayer1Poke4BattleStatus}
            Terastallized={repPlayer1Poke4Terastallized}
            StatusAilment={repPlayer1Poke4StatusAilment}
            TerastalType={repPlayer1Poke4TerastalType}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer1Poke5Icon}
            BattleStatus={repPlayer1Poke5BattleStatus}
            Terastallized={repPlayer1Poke5Terastallized}
            StatusAilment={repPlayer1Poke5StatusAilment}
            TerastalType={repPlayer1Poke5TerastalType}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer1Poke6Icon}
            BattleStatus={repPlayer1Poke6BattleStatus}
            Terastallized={repPlayer1Poke6Terastallized}
            StatusAilment={repPlayer1Poke6StatusAilment}
            TerastalType={repPlayer1Poke6TerastalType}
          />
        </div>
        <div className="p2-party">
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer2Poke1Icon}
            BattleStatus={repPlayer2Poke1BattleStatus}
            Terastallized={repPlayer2Poke1Terastallized}
            StatusAilment={repPlayer2Poke1StatusAilment}
            TerastalType={repPlayer2Poke1TerastalType}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer2Poke2Icon}
            BattleStatus={repPlayer2Poke2BattleStatus}
            Terastallized={repPlayer2Poke2Terastallized}
            StatusAilment={repPlayer2Poke2StatusAilment}
            TerastalType={repPlayer2Poke2TerastalType}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer2Poke3Icon}
            BattleStatus={repPlayer2Poke3BattleStatus}
            Terastallized={repPlayer2Poke3Terastallized}
            StatusAilment={repPlayer2Poke3StatusAilment}
            TerastalType={repPlayer2Poke3TerastalType}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer2Poke4Icon}
            BattleStatus={repPlayer2Poke4BattleStatus}
            Terastallized={repPlayer2Poke4Terastallized}
            StatusAilment={repPlayer2Poke4StatusAilment}
            TerastalType={repPlayer2Poke4TerastalType}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer2Poke5Icon}
            BattleStatus={repPlayer2Poke5BattleStatus}
            Terastallized={repPlayer2Poke5Terastallized}
            StatusAilment={repPlayer2Poke5StatusAilment}
            TerastalType={repPlayer2Poke5TerastalType}
          />
          <PokemonAvatarGraphics
            PokemonIcon={repPlayer2Poke6Icon}
            BattleStatus={repPlayer2Poke6BattleStatus}
            Terastallized={repPlayer2Poke6Terastallized}
            StatusAilment={repPlayer2Poke6StatusAilment}
            TerastalType={repPlayer2Poke6TerastalType}
          />
        </div>
      </div>
      <div className="timer timer-font">{repTimer}</div>
    </>
  );
}
