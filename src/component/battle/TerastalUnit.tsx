import { Stack } from "@mui/material";
import { TerastalButton } from "./TerastalButton";
import { PlayerNum, PokemonNum } from "../../types/scoreboard";
import { TerastalTypeSelector } from "./TerastalTypeSelector";

type Props = {
  player: PlayerNum;
  pokemonNum: PokemonNum;
};

export function TerastalUnit({ player, pokemonNum }: Props) {
  return (
    <Stack spacing={1} direction="row">
      <TerastalButton player={player} pokemonNum={pokemonNum} />
      <TerastalTypeSelector player={player} pokemonNum={pokemonNum} />
    </Stack>
  );
}
