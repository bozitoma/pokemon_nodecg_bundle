import './App.css';
// import { useRepList } from '../../hooks/useRepList';
// import { GraphicsKP } from '../../component/battle/GraphicsKP';
// import { memo } from 'react';
import { GraphicsLegendary } from '../../component/battle/GraphicsLegendary';

// const Kp = memo(({ rank }: { rank: number }) => {
//   return (
//     <div className="list">
//       {[...Array(10)].map((_, i) => {
//         const num = i + rank;
//         return (
//           <>
//             <GraphicsKP listNumber={num} />
//           </>
//         );
//       })}
//     </div>
//   );
// });

function App() {
  // const { repParty } = useRepList();
  // パーティの総数
  // const totalPartyNum = repParty?.length;
  return (
    <div className="wrapper">
      <GraphicsLegendary num={5} />
      <GraphicsLegendary num={6} />
      <GraphicsLegendary num={7} />
      <GraphicsLegendary num={8} />
      <GraphicsLegendary num={9} />
      {/* <Kp rank={0} />
      <Kp rank={10} />
      <Kp rank={20} /> */}
      {/* <div className="totalParty">{totalPartyNum}</div> */}
    </div>
  );
}

export default App;
