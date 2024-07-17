import { useRepList } from '../../hooks/useRepList';
import { TopcutPlayerNum } from '../../types/scoreboard';
import { topcutDefaultValue } from '../../types/scoreboardDefaultValue';

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
  Player17: topcutDefaultValue,
  Player18: topcutDefaultValue,
  Player19: topcutDefaultValue,
  Player20: topcutDefaultValue,
  Player21: topcutDefaultValue,
  Player22: topcutDefaultValue,
  Player23: topcutDefaultValue,
  Player24: topcutDefaultValue,
  Player25: topcutDefaultValue,
  Player26: topcutDefaultValue,
  Player27: topcutDefaultValue,
  Player28: topcutDefaultValue,
  Player29: topcutDefaultValue,
  Player30: topcutDefaultValue,
  Player31: topcutDefaultValue,
  Player32: topcutDefaultValue,
};

export function GraphicsTopcutPartySolo({ topcutPlayerNum }: Props) {
  const { repTopcut } = useRepList();
  const topcutData = repTopcut ? repTopcut : defaultValue;

  return (
    <div className="party_row">
      <img className="pokemonIcon" src={topcutData[topcutPlayerNum].pokemon1.icon} alt="" />
      <img className="pokemonIcon" src={topcutData[topcutPlayerNum].pokemon2.icon} alt="" />
      <img className="pokemonIcon" src={topcutData[topcutPlayerNum].pokemon3.icon} alt="" />
      <img className="pokemonIcon" src={topcutData[topcutPlayerNum].pokemon4.icon} alt="" />
      <img className="pokemonIcon" src={topcutData[topcutPlayerNum].pokemon5.icon} alt="" />
      <img className="pokemonIcon" src={topcutData[topcutPlayerNum].pokemon6.icon} alt="" />
      {/* <div className="score">{topcutData[topcutPlayerNum].partyKP}</div> */}
    </div>
  );
}

// Array(10)だけだと、空配列になってしまうので、fill(0)で配列の中身を0で埋める
