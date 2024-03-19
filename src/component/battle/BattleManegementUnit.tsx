import { PlayerNum } from "../../types/scoreboard";
import { pokemonNumList } from "../../types/scoreboardDefaultValue";
import { BattleManegementSolo } from "./BattleManegementSolo";

type Props = {
  player: PlayerNum;
};

export function BattleManegementUnit({ player }: Props) {
  return (
    <>
      {pokemonNumList.map((pokemon) => (
        <BattleManegementSolo player={player} pokemonNum={pokemon} />
      ))}
    </>
  );
}
