import { GraphicsParty } from '../../component/battle/GraphicsParty';
import { useRepList } from '../../hooks/useRepList';

export function GraphicsOverlay() {
  const { repTimer } = useRepList();
  return (
    <div className="overlay">
      <div className="timer">{repTimer}</div>
      <GraphicsParty player="Player1" />
      <GraphicsParty player="Player2" />
    </div>
  );
}
