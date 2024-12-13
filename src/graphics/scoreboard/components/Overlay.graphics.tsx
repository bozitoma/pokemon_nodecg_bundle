import { PartyGraphics } from './Party.graphics';
import { TimerGraphics } from './Timer.graphics';

export const OverlayGraphics = () =>  {
  return (
    <div className="overlay">
      <TimerGraphics />
      <PartyGraphics playerSide="Player1" />
      <PartyGraphics playerSide="Player2" />
    </div>
  );
};
