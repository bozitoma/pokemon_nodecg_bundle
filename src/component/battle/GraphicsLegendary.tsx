// import { PlayerNum, PokemonNum } from '../../types/scoreboard';
import { useRepList } from '../../hooks/useRepList';
import { usePokedex } from '../../hooks/usePokedex';
import { KPDefaultValues } from '../../types/replicant';
import { LegendaryPokemon } from '../../utils/LegendaryPokemon';

// type Props = {
//   listNumber: number;
// };

// 'ディアルガ（オリジンフォルム）',
// 'パルキア',
// 'パルキア（オリジンフォルム）',
// 'ギラティナ（アナザーフォルム）',
// 'ギラティナ（オリジンフォルム）',
// 'レシラム',
// 'ゼクロム',
// 'キュレム（キュレムのすがた）',
// 'キュレム（ホワイトキュレム）',
// 'キュレム（ブラックキュレム）',
// 'コスモッグ',
// 'コスモウム',
// 'ソルガレオ',
// 'ルナアーラ',
// 'ネクロズマ',
// 'ネクロズマ（たそがれのたてがみ）',
// 'ネクロズマ（あかつきのつばさ）',
// 'ザシアン',
// 'ザマゼンタ',
// 'ムゲンダイナ',
// 'バドレックス',
// 'バドレックス（はくばじょうのすがた）',
// 'バドレックス（こくばじょうのすがた）',
// 'コライドン',
// 'ミライドン',
// 'テラパゴス',

const nameConvert = (name: string) => {
  switch (name) {
    case 'バドレックス（はくばじょうのすがた）':
      return '白バドレックス';
    case 'バドレックス（こくばじょうのすがた）':
      return '黒バドレックス';
    case 'キュレム（ホワイトキュレム）':
      return 'ホワイトキュレム';
    case 'キュレム（ブラックキュレム）':
      return 'ブラックキュレム';
    case 'キュレム（キュレムのすがた）':
      return 'キュレム';
    case 'ネクロズマ（たそがれのたてがみ）':
      return '日食ネクロズマ';
    case 'ネクロズマ（あかつきのつばさ）':
      return '月食ネクロズマ';
    case 'ギラティナ（アナザーフォルム）':
      return 'ギラティナ';
    case 'ギラティナ（オリジンフォルム）':
      return 'ギラティナオリジン';
    case 'ギラティナ（アナザーフォルム）':
      return 'ギラティナ';
    case 'ギラティナ（オリジンフォルム）':
      return 'オリジンギラティナ';
    case 'ディアルガ（オリジンフォルム）':
      return 'オリジンディアルガ';
    case 'パルキア（オリジンフォルム）':
      return 'オリジンパルキア';
    default:
      return name;
  }
};

// KPを実数値からパーセント表記に変換
// const kpToPercent = (total: number | undefined, KP: number) => {
//   if (!total) return 0;
//   const result = (KP / total) * 100; // パーティ総数で採用数を割る
//   const roundToTwo = Math.round(result * 10) / 10; // 小数第二位で四捨五入する
//   return roundToTwo;
// };

export function GraphicsLegendary({ num }: { num: number }) {
  const { repKP, repK2P, repParty } = useRepList();
  const { getPokemonIcon } = usePokedex();

  // パーティの総数
  const totalPartyNum = repParty?.length;

  const KP = repKP ? repKP : [KPDefaultValues];
  const K2P = repK2P ? repK2P : [KPDefaultValues];

  console.log(KP);
  console.log(K2P);

  const filterLegendary = repKP
    ? KP?.filter((pokemon) => LegendaryPokemon.includes(pokemon.pokemon))
    : [KPDefaultValues];
  console.log(filterLegendary);

  const sortedLegendary = repKP
    ? filterLegendary.sort((a, b) => b.score - a.score)
    : [...Array(12)].map(() => KPDefaultValues);

  console.log(sortedLegendary);

  const NEWK2P = repK2P
    ? sortedLegendary.map((pokemon) => {
        const name = pokemon.pokemon;
        const fliterd = K2P?.filter((pokemon) => pokemon.pokemon.includes(name));
        const result = fliterd?.sort((a, b) => b.score - a.score);

        const isolate = result?.map((k2p) => {
          const score = k2p.score;
          const names = k2p.pokemon;
          // const reg = new RegExp(`×${name}`, 'g');
          const isolates = names.split('×').filter((item) => item !== name);

          const percent = (score / (totalPartyNum ? totalPartyNum : 1)) * 100; // パーティ総数で採用数を割る
          const roundToTwo = Math.round(percent * 10) / 10; // 小数第二位で四捨五入する
          return {
            name: isolates ? isolates[0] : '',
            score: roundToTwo ? roundToTwo : 0,
          };
        });

        return isolate;
      })
    : [...Array(12)].map(() => {
        return [...Array(10)].map(() => ({
          name: '',
          score: 0,
        }));
      });

  console.log(NEWK2P);

  // // 三項演算子でundefindを排除
  // const KPdata = repKP ? repKP[listNumber] : KPDefaultValues;
  // const rank = KPdata.rank;
  // const name = KPdata.pokemon;
  // const score = KPdata.score;

  // ポケモンのアイコンを取り寄せ
  // const pokemonIcon = getPokemonIcon(name);

  // console.log(sortedLegendary[num].pokemon);

  return (
    <div className="section">
      <div className="legend">
        <img className="legendIcon" src={getPokemonIcon(sortedLegendary[num].pokemon)} alt="" />
        <div className="legendName">{nameConvert(sortedLegendary[num].pokemon)}</div>
      </div>

      <div className="list">
        {[...Array(10)].map((_, i) => {
          return (
            <div className="pear">
              {/* <div className="rank">{i + 1}</div> */}
              <img
                className="pokemonIcon"
                src={
                  NEWK2P[num][i]
                    ? getPokemonIcon(NEWK2P[num][i].name)
                    : 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png'
                }
                alt=""
              />
              {/* <div className="name">{nameConvert(NEWK2P[num][i].name)}</div> */}
              <div className="scoreArea">
                <div className="score">{NEWK2P[num][i] ? NEWK2P[num][i].score : ''}</div>
                <div className="percent">%</div>
              </div>
              {/* <div className="percent">%</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
