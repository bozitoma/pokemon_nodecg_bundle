import { TopcutPlayerSelector } from '../../components/Topcut/TopcutPlayerSelector';
import { useReplicant } from '../../hooks/useReplicant';
import './App.css';

function App() {
  const [topcutRep] = useReplicant('Topcut');
  const topcut = topcutRep?.players?.find((player) => player.place === 1) ?? {
    place: 1,
    name: 'なし',
    party: ['なし', 'なし', 'なし', 'なし', 'なし', 'なし'],
  };

  return (
    <>
      <TopcutPlayerSelector topcutPlace={1} />
      {topcut.place}
      {topcut.name}
      {topcut.party.map((pokemon) => pokemon)}
    </>
  );
}

export default App;
