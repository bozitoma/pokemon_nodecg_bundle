import { TopcutPartyGraphics } from './TopcutParty.graphics';

export const TopcutPartyList = ({ start, end }: { start: number; end: number }) => {
  return (
    <div className="list">
      {[...Array(end - start + 1)].map((_, index) => {
        return <TopcutPartyGraphics key={`Topcut-Place-${start + index}`} place={start + index} />;
      })}
    </div>
  );
};
