// import { PlayerNum, PokemonNum } from '../../types/scoreboard';
import { useRepList } from '../../hooks/useRepList';
import { usePokedex } from '../../hooks/usePokedex';
import { KPDefaultValues } from '../../types/replicant';

export function GraphicsK2P_KPtop10() {
  const { repKP, repK2P_KPtop10 } = useRepList();
  const { getPokemonIcon } = usePokedex();
  const KPdata = repKP ? repKP : [KPDefaultValues];
  const repK2P_KPtop10data = repK2P_KPtop10 ? repK2P_KPtop10 : [KPDefaultValues];

  const nameConvert = (name: string) => {
    switch (name) {
      case 'ウーラオス（れんげきのかた）':
        return '水ウーラオス';
      case 'ウーラオス（いちげきのかた）':
        return '悪ウーラオス';
      case 'オーガポン（みどりのめん）':
        return '草オーガポン';
      case 'オーガポン（かまどのめん）':
        return '炎オーガポン';
      case 'オーガポン（いどのめん）':
        return '水オーガポン';
      case 'オーガポン（いしずえのめん）':
        return '岩オーガポン';
      default:
        return name;
    }
  };

  // KPtop10のポケモン名をリスト化
  const KPtop10: string[] = [];
  const KPtop10icon: (string | undefined)[] = [];

  for (let i = 0; i < 10; i++) {
    const data = KPdata ? KPdata[i] : ''; // 一度にpokemonのプロパティにアクセスするとうまく表示されないので分ける
    const name = data ? data.pokemon : '';
    KPtop10.push(name);
    KPtop10icon.push(getPokemonIcon(name));
  }

  const scoreList = KPtop10.map((pokemon) => {
    const result = [];
    for (let i = 0; i < 10; i++) {
      // KPtop10内で組み合わせがあるかを検索
      const peaSearch = repK2P_KPtop10data.findIndex(
        (pea) => pea.pokemon.includes(pokemon) && pea.pokemon.includes(KPtop10[i])
      );
      console.log(pokemon, KPtop10[i], peaSearch);

      if (pokemon === KPtop10[i]) {
        // 同一の名前はそのポケモンのKPscoreを返す
        const index = KPdata.findIndex((data) => data.pokemon === pokemon);
        const score = KPdata[index].score;
        result.push(score);
      } else if (peaSearch !== -1) {
        // ペアが存在する場合はそのK2Pscoreを返す
        const score = repK2P_KPtop10data[peaSearch].score;
        result.push(score);
      } else {
        result.push(0);
      }
    }
    console.log(pokemon, result);

    return result;
  });

  return (
    <div>
      <div className="headerIcons">
        {Array(10)
          .fill(0)
          .map((_v, i) => {
            return <img className="pokemonIcon headerIcon" src={KPtop10icon[i]} alt="" />;
          })}
      </div>
      <div className="section">
        {Array(10)
          .fill(0)
          .map((_v, i) => {
            return (
              <div className="k2pRow">
                <img className="pokemonIcon" src={KPtop10icon[i]} alt="" />
                <div className="name">{nameConvert(KPtop10[i])}</div>
                <div className="score">{scoreList[i][0]}</div>
                <div className="score">{scoreList[i][1]}</div>
                <div className="score">{scoreList[i][2]}</div>
                <div className="score">{scoreList[i][3]}</div>
                <div className="score">{scoreList[i][4]}</div>
                <div className="score">{scoreList[i][5]}</div>
                <div className="score">{scoreList[i][6]}</div>
                <div className="score">{scoreList[i][7]}</div>
                <div className="score">{scoreList[i][8]}</div>
                <div className="score">{scoreList[i][9]}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

// Array(10)だけだと、空配列になってしまうので、fill(0)で配列の中身を0で埋める
