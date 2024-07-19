import './App.css';
import { useRepList } from '../../hooks/useRepList';
import { GraphicsKP } from '../../component/battle/GraphicsKP';
import { memo } from 'react';

const Kp = memo(({ rank }: { rank: number }) => {
  return (
    <div className="list">
      {[...Array(10)].map((_, i) => {
        const num = i + rank;
        return (
          <>
            <GraphicsKP listNumber={num} />
          </>
        );
      })}
    </div>
  );
});

function App() {
  const { repParty } = useRepList();
  // パーティの総数
  const totalPartyNum = repParty?.length;
  return (
    <div className="wrapper">
      <Kp rank={0} />
      <Kp rank={10} />
      <Kp rank={20} />
      {/* <div className="list">
        <GraphicsKP listNumber={0} />
        <GraphicsKP listNumber={1} />
        <GraphicsKP listNumber={2} />
        <GraphicsKP listNumber={3} />
        <GraphicsKP listNumber={4} />
        <GraphicsKP listNumber={5} />
        <GraphicsKP listNumber={6} />
      </div>
      <div className="list">
        <GraphicsKP listNumber={7} />
        <GraphicsKP listNumber={8} />
        <GraphicsKP listNumber={9} />
        <GraphicsKP listNumber={10} />
        <GraphicsKP listNumber={11} />
        <GraphicsKP listNumber={12} />
        <GraphicsKP listNumber={13} />
      </div>
      <div className="list">
        <GraphicsKP listNumber={14} />
        <GraphicsKP listNumber={15} />
        <GraphicsKP listNumber={16} />
        <GraphicsKP listNumber={17} />
        <GraphicsKP listNumber={18} />
        <GraphicsKP listNumber={19} />
      </div> */}
      <div className="totalParty">{totalPartyNum}</div>
    </div>
  );
}

export default App;
