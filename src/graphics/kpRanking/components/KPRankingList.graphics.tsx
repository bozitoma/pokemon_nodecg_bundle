import { KPGraphics } from '../components/KP.graphics';
import { useReplicant } from '../../../hooks/useReplicant';

export const KPRankingList = ({ start, end }: { start: number; end: number }) => {
  const [KPRep] = useReplicant('KP');
  const KP = KPRep?.ranking ?? [];
  const totalPartyNum = KPRep?.total ?? 0;
  return (
    <div className="list">
      {[...Array(end - start)].map((_, index) => {
        const rankingData = KP[start + index - 1];
        if (!rankingData) return null;
        return (
          <KPGraphics
            key={`KP-${rankingData.id}`}
            place={rankingData.place}
            rankingData={rankingData}
            total={totalPartyNum}
          />
        );
      })}
    </div>
  );
};
