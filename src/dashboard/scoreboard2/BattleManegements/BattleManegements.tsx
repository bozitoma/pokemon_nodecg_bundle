import { BattleManegement } from '../../../components/BattleManegement';
import { pokemonNumList } from '../../../utils/const';
import { PlayerSide } from '../../../types/scoreboard';
import { memo, useMemo } from 'react';
import { Wrapper } from '../../../components/Wrapper';
import { useReplicant } from '../../../hooks/useReplicant';
import { PartyImport } from '../../../components/PartyImport';

export const BattleManegements = memo(({ playerSide }: { playerSide: PlayerSide }) => {
  const [scoreboardRep] = useReplicant('Scoreboard');
  const playerName = useMemo(
    () =>
      scoreboardRep?.[playerSide]?.name !== ''
        ? scoreboardRep?.[playerSide]?.name
        : playerSide,
    [scoreboardRep, playerSide]
  );
  return (
    <>
      <Wrapper title={playerName}>
        <PartyImport playerSide={playerSide} />
        {pokemonNumList.map((pokemon) => (
          <BattleManegement playerSide={playerSide} pokemonNum={pokemon} />
        ))}
      </Wrapper>
    </>
  );
});
