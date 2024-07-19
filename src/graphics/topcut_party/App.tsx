import './App.css';
import { useRepList } from '../../hooks/useRepList';
import { GraphicsTopcutPartySolo } from '../../component/topcut/GraphicsTopcutPartySolo';
import { useTopcut } from '../../hooks/useTopcut';
import { pokemonNumList } from '../../types/scoreboardDefaultValue';
// import { EntryMargePokemon } from '../../types/scoreboard';
import { usePokedex } from '../../hooks/usePokedex';
import { LegendaryPokemon } from '../../utils/LegendaryPokemon';
// import { TopcutPlayerNum } from '../../types/scoreboard';

type pokemonDef = {
  name: string;
  KP: number;
};

type partyKPrank = {
  pokemon1: pokemonDef;
  pokemon2: pokemonDef;
  pokemon3: pokemonDef;
  pokemon4: pokemonDef;
  pokemon5: pokemonDef;
  pokemon6: pokemonDef;
  partyKP: number;
};

const def = {
  name: 'なし',
  teraType: '',
};

const partyDefault = [
  {
    id: 0,
    accountID: '',
    player_name: '',
    pokemon1: def,
    pokemon2: def,
    pokemon3: def,
    pokemon4: def,
    pokemon5: def,
    pokemon6: def,
  },
];
function App() {
  // const { repParty } = useRepList();
  // パーティの総数
  // const totalPartyNum = repParty?.length;
  // const maxPartyKP = totalPartyNum ? totalPartyNum * 6 : 0;
  const { repParty } = useRepList();
  const { getKPscore } = useTopcut();
  const { getPokemonIcon } = usePokedex();
  const party = repParty ? repParty : partyDefault;

  const partyKP: partyKPrank[] = party?.reduce((acc, cur) => {
    const party = pokemonNumList.map((pokeNum) => cur[pokeNum].name);
    const kps = party.map((pokemon) => getKPscore(pokemon));
    console.log(party);
    console.log(kps);

    const partyKP2 = kps.reduce((acc2, cur2) => acc2 + cur2, 0);
    const result: partyKPrank = {
      pokemon1: {
        name: party[0],
        KP: kps[0],
      },
      pokemon2: { name: party[1], KP: kps[1] },
      pokemon3: { name: party[2], KP: kps[2] },
      pokemon4: { name: party[3], KP: kps[3] },
      pokemon5: { name: party[4], KP: kps[4] },
      pokemon6: { name: party[5], KP: kps[5] },
      partyKP: partyKP2,
    };
    return [...acc, result];
  }, [] as partyKPrank[]);

  const sortPartyKP = partyKP?.sort((a, b) => b.partyKP - a.partyKP);
  console.log(sortPartyKP[0]);
  const maxKPParty = pokemonNumList
    .map((pokeNum) => sortPartyKP[0][pokeNum]) // ポケモンだけ単離
    .sort((a, b) => b.KP - a.KP) // KP順に並び替え
    .reduce((acc, cur) => {
      //伝説先頭に
      if (LegendaryPokemon.includes(cur.name)) {
        return [cur, ...acc];
      } else {
        return [...acc, cur];
      }
    }, [] as pokemonDef[]);

  // パーティの総数
  const totalPartyNum = repParty?.length;

  return (
    <div className="wrapper">
      <div className="list">
        <GraphicsTopcutPartySolo topcutPlayerNum="Player1" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player2" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player3" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player4" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player5" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player6" />
      </div>
      <div className="list">
        <GraphicsTopcutPartySolo topcutPlayerNum="Player7" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player8" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player9" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player10" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player11" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player12" />
      </div>
      <div className="list">
        <GraphicsTopcutPartySolo topcutPlayerNum="Player13" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player14" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player15" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player16" />
        <div className="party_row maxParty">
          <img className="pokemonIcon" src={getPokemonIcon(maxKPParty[0].name)} alt="" />
          <img className="pokemonIcon" src={getPokemonIcon(maxKPParty[1].name)} alt="" />
          <img className="pokemonIcon" src={getPokemonIcon(maxKPParty[2].name)} alt="" />
          <img className="pokemonIcon" src={getPokemonIcon(maxKPParty[3].name)} alt="" />
          <img className="pokemonIcon" src={getPokemonIcon(maxKPParty[4].name)} alt="" />
          <img className="pokemonIcon" src={getPokemonIcon(maxKPParty[5].name)} alt="" />
          <div>
            <div className="score">{sortPartyKP[0].partyKP}</div>
          </div>
        </div>
      </div>

      <div className="totalParty">{totalPartyNum}</div>
    </div>
  );
}

export default App;
