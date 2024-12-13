import { TopcutPartyGraphics } from './TopcutParty.graphics';

export const TopcutPartyList = ({ start, end }: { start: number; end: number }) => {
  return (
    <div className="list">
      {[...Array(end - start + 1)].map((_, index) => {
        return <TopcutPartyGraphics key={`Topcut-Place-${index + 1}`} place={start + index} />;
      })}
    </div>
  );
};
