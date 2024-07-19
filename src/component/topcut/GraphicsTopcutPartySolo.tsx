import { useRepList } from '../../hooks/useRepList';
import { TopcutPlayerNum, TopcutPokemon } from '../../types/scoreboard';
import { topcutDefaultValue } from '../../types/scoreboardDefaultValue';
import { LegendaryPokemon } from '../../utils/LegendaryPokemon';

type Props = {
  topcutPlayerNum: TopcutPlayerNum;
};

const defaultValue = {
  Player1: topcutDefaultValue,
  Player2: topcutDefaultValue,
  Player3: topcutDefaultValue,
  Player4: topcutDefaultValue,
  Player5: topcutDefaultValue,
  Player6: topcutDefaultValue,
  Player7: topcutDefaultValue,
  Player8: topcutDefaultValue,
  Player9: topcutDefaultValue,
  Player10: topcutDefaultValue,
  Player11: topcutDefaultValue,
  Player12: topcutDefaultValue,
  Player13: topcutDefaultValue,
  Player14: topcutDefaultValue,
  Player15: topcutDefaultValue,
  Player16: topcutDefaultValue,
  // Player17: topcutDefaultValue,
  // Player18: topcutDefaultValue,
  // Player19: topcutDefaultValue,
  // Player20: topcutDefaultValue,
  // Player21: topcutDefaultValue,
  // Player22: topcutDefaultValue,
  // Player23: topcutDefaultValue,
  // Player24: topcutDefaultValue,
  // Player25: topcutDefaultValue,
  // Player26: topcutDefaultValue,
  // Player27: topcutDefaultValue,
  // Player28: topcutDefaultValue,
  // Player29: topcutDefaultValue,
  // Player30: topcutDefaultValue,
  // Player31: topcutDefaultValue,
  // Player32: topcutDefaultValue,
};

export function GraphicsTopcutPartySolo({ topcutPlayerNum }: Props) {
  const { repTopcut } = useRepList();
  const topcutData = repTopcut ? repTopcut : defaultValue;

  const isolateParty = [...Array(6)].map((_, i) => {
    const pokemonNum = `pokemon${i + 1}` as
      | 'pokemon1'
      | 'pokemon2'
      | 'pokemon3'
      | 'pokemon4'
      | 'pokemon5'
      | 'pokemon6';
    return topcutData[topcutPlayerNum][pokemonNum];
  });

  const sortedParty = isolateParty.sort((a, b) => b.score - a.score);
  // console.log(sortedParty);

  const legendInitial = sortedParty.reduce((acc, cur) => {
    if (LegendaryPokemon.includes(cur.name)) {
      return [cur, ...acc];
    } else {
      return [...acc, cur];
    }
  }, [] as TopcutPokemon[]);

  return (
    <div className="party_row">
      <img className="pokemonIcon" src={legendInitial[0].icon} alt="" />
      <img className="pokemonIcon" src={legendInitial[1].icon} alt="" />
      <img className="pokemonIcon" src={legendInitial[2].icon} alt="" />
      <img className="pokemonIcon" src={legendInitial[3].icon} alt="" />
      <img className="pokemonIcon" src={legendInitial[4].icon} alt="" />
      <img className="pokemonIcon" src={legendInitial[5].icon} alt="" />
      <div>
        <div className="score">{topcutData[topcutPlayerNum].partyKP}</div>
      </div>
    </div>
  );
}

// Array(10)だけだと、空配列になってしまうので、fill(0)で配列の中身を0で埋める
